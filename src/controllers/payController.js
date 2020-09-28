const mercadopago = require('mercadopago')

exports.index = (req, res) => {
  res.render('index')
}

exports.payment = (req, res) => {

  var payment_data = {
    transaction_amount: Number(req.body.transactionAmount),
    token: req.body.token,
    description: req.body.description,
    installments: Number(req.body.installments),
    payment_method_id: req.body.paymentMethodId,
    issuer_id: req.body.issuer,
    payer: {
      email: req.body.email,
      identification: {
        type: req.body.docType,
        number: req.body.docNumber
      }
    }
  };

  mercadopago.payment.save(payment_data)
    .then(function(response) {
      res.status(response.status).json({
        status: response.body.status,
        status_detail: response.body.status_detail,
        id: response.body.id
      });
    })
    .catch(function(error) {
      res.status(response.status).send(error);
    });
};