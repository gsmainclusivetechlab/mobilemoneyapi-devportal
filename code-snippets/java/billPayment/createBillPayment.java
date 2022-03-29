MMClient mmClient = new MMClient("<Place your consumer key>", "<Place your consumer secret>", "<Place your API key>");
BillPaymentRequest billPaymentRequest = new BillPaymentRequest();
List<AccountIdentifier> identifierList = new ArrayList<>();

identifierList.add(new AccountIdentifier("<identifier type>", "<identifier>"));

Bills bills = mmClient.addRequest(billPaymentRequest).viewAccountBills(new Identifiers(identifierList));

billPaymentRequest.setBillPayment(getBillPayment());
AsyncResponse sdkResponse = mmClient.addRequest(billPaymentRequest).addCallBack("<Place your callback URL>").createBillPayment(new Identifiers(identifierList), bills.get(0).getBillReference());