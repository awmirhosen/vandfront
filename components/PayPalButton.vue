<template>
    <div ref="paypalButton"></div>
</template>

<script setup>
import { loadScript } from '@paypal/paypal-js';

const paypalButton = ref(null);

onMounted(async () => {

    let paypal;

    try {
        paypal = await loadScript({
            "clientId": "AU_A_5LtKYvtQF7deCmntW-NJD1iyEA1sMQGBKZoR0c744v7pLC7FQPthoOzNlkHbi-SpGx2W_EGzswj",
            "currency": "EUR"
        });
    } catch (err) {
        console.error("failed to render the PayPal Buttons", err);
    }

    if (paypal) {
        try {
            await paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: "50",
                                currency_code: "EUR"
                            }
                        }]
                    });
                },
                onApprove: (data, actions) => {
                    return actions.order.capture().then(details => {
                        console.log(details);
                    });
                },
                onCancel: () => {

                },
                onError: (err) => {
                    console.error(err);
                }
            }).render(paypalButton.value);
        } catch (err) {
            console.error("failed to render the PayPal Buttons", err);
        }
    }

});

</script>