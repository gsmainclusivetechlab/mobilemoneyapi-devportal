Transaction  transactionRequest = new Transaction();
transactionRequest.setAmount("200");
transactionRequest = new Transaction();

ArrayList<AccountIdentifier> debitPartyList = new ArrayList<>();
ArrayList<AccountIdentifier> creditPartyList = new ArrayList<>();
AccountIdentifier debitPartyItem = new AccountIdentifier();
AccountIdentifier creditPartyItem = new AccountIdentifier();

debitPartyItem.setKey("mandatereference");
debitPartyItem.setValue(debitMandateReference);
debitPartyList.add(debitPartyItem);

creditPartyItem.setKey("accountid");
creditPartyItem.setValue("2999");
creditPartyList.add(creditPartyItem);

transactionRequest.setDebitParty(debitPartyList);
transactionRequest.setCreditParty(creditPartyList);
transactionRequest.setAmount("200.00");
transactionRequest.setCurrency("RWF");

SDKManager.recurringPayment.createRefundTransaction(NotificationMethod,"CALLBACK URL",transactionRequest, new RequestStateInterface() {
    @Override
    public void onRequestStateSuccess(RequestStateObject requestStateObject) {
    serverCorrelationId = requestStateObject.getServerCorrelationId();
    }

    @Override
    public void onRequestStateFailure(GSMAError gsmaError) {
        
    }

    @Override
    public void onValidationError(ErrorObject errorObject) {
      
    }
    @Override
    public void getCorrelationId(String correlationID) {
        
    }
});