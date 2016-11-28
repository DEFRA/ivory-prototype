const handlers = {
  get: function (request, reply) {
    return reply.view('licence-start-option', {
      pageTitle: 'When would you like your licence to start?',
      errorMessage: 'Choose when you\'d like your licence to start',
      items: {
          one: {
            text: '30 minutes after payment',
            name: 'licence_start_option',
            id: 'asap',
          },
          two: {
            text: 'Another time or date',
            name: 'licence_start_option',
            id: 'absolute',
          },
      }
    })
  },
  post: function (request, reply) {
    var startOption = request.payload.licence_start_option
    returnURL = request.query.returnUrl


    if (startOption === 'asap') {
      request.session.startDate = "30 minutes after payment"
      if (returnURL) {
        return reply.redirect(returnURL)
      } else {
        return reply.redirect('date-of-birth')
      }
    } else {
      if (returnURL) {
        return reply.redirect('licence-start-day?returnUrl=/buy/summary')
      } else {
        return reply.redirect('licence-start-day')
      }
    }




    if (returnURL) {
      return reply.redirect('select-address?returnUrl=/buy/summary')
    } else {
      return reply.redirect('select-address')
    }




  }
}

module.exports = [{
  method: 'GET',
  path: '/buy/licence-start-option',
  config: {
    handler: handlers.get
  }
},
{
  method: 'POST',
  path: '/buy/licence-start-option',
  config: {
    handler: handlers.post
  }
}]
