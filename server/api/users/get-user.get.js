export default defineEventHandler(async (event) => {
  const user_id = getCookie(event, "user_id");
  try {
    const request = await $fetch(`http://202.133.88.224:8002/api/contributor/${user_id}`, {
      method: "GET",
    });
    return request;
  } catch (error) {
    return error;
  }
});
