MMClient mmClient = new MMClient("<Place your consumer key>", "<Place your consumer secret>", "<Place your API key>");
RecurringPaymentRequest recurringPaymentRequest = new RecurringPaymentRequest();

DebitMandate debitMandate = new DebitMandate();
List<AccountIdentifier> payee = new ArrayList<>();
List<CustomData> customData = new ArrayList<>();

payee.add(new AccountIdentifier("<identifier type>", "<identifier>"));
customData.add(new CustomData("<data key>", "<data value>"));

debitMandate.setRequestDate("2018-07-03T10:43:27.405Z");
debitMandate.setStartDate("2018-07-03T10:43:27.405Z");
debitMandate.setEndDate("2028-07-03T10:43:27.405Z");
debitMandate.setCurrency("<currency>");
debitMandate.setAmountLimit("<amount>");
debitMandate.setNumberOfPayments("<payments count>");
debitMandate.setFrequencyType("<frequency>");
debitMandate.setPayee(payee);
debitMandate.setCustomData(customData);

List<AccountIdentifier> identifierList = new ArrayList<>();

identifierList.add(new AccountIdentifier("<identifier type>", "<identifier>"));
recurringPaymentRequest.setDebitMandate(debitMandate);

AsyncResponse sdkResponse = mmClient.addRequest(recurringPaymentRequest).addCallBack("<Place your callback URL>").createAccountDebitMandate(new Identifiers(identifierList));
        
sdkResponse = mmClient.addRequest(recurringPaymentRequest).viewRequestState(sdkResponse.getServerCorrelationId());
DebitMandate debitMandateResponse = mmClient.addRequest(recurringPaymentRequest).viewAccountDebitMandate(new Identifiers(identifierList), sdkResponse.getObjectReference());