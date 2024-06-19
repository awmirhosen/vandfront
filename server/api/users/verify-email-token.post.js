export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const request = await $fetch("http://202.133.88.224:8002/api/verify-email", {
      method: "POST",
      body,
    });
    return request;
  } catch (error) {
    return error;
  }
});
