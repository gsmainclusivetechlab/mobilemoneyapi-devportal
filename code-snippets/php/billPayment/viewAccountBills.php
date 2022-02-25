<?php
require_once __DIR__ . './../bootstrap.php';
use mmpsdk\Common\Exceptions\MobileMoneyException;
use mmpsdk\BillPayment\BillPayment;

$accountIdentifier = [
    'accountid' => 2000
];
try {
    /**
     * Construct request object and set desired parameters
     */
    $request = BillPayment::viewAccountBills($accountIdentifier, [
        'limit' => 5
    ]);

    /**
     *Execute the request
     */
    $response = $request->execute();

    print_r($response);
} catch (MobileMoneyException $ex) {
    print_r($ex->getMessage());
    print_r($ex->getErrorObj());
}