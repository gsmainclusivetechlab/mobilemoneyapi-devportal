MMClient mmClient = new MMClient("<Place your consumer key>", "<Place your consumer secret>", "<Place your API key>");
List<AccountIdentifier> identifierList = new ArrayList<>();

identifierList.add(new AccountIdentifier("<identifier type>", "<identifier>"));

Balance balance = mmClient.addRequest(new P2PTransferRequest()).viewAccountBalance(new Identifiers(identifierList));