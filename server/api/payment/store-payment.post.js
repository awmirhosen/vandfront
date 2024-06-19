export default defineEventHandler(async (event) => {
  const user_id = getCookie(event, "user_id");
  const body = await readBody(event);
  try {
    const request = await $fetch(`http://202.133.88.224:8002/api/store-payment`, {
      method: "POST",
      body: {
        user_id: user_id,
        payment_refID: body.paymentRefID,
        payment_data: body.paymentData,
        amount: body.amount,
        payment_using: "paypal",
      },
    });
    return request;
  } catch (error) {
    return error;
  }
});
