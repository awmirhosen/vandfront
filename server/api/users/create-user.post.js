export default defineEventHandler(async (event) => {
  const body = await readFormData(event);
  try {
    const request = await $fetch("http://202.133.88.224:8002/api/contributor", {
      method: "POST",
      body,
      headers: {
        Accept: "application/json",
      },
    });
    setCookie(event, "user_id", request.id, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
      priority: "high",
      sameSite: "strict",
    });
    return request;
  } catch (error) {
    return error;
  }
});
