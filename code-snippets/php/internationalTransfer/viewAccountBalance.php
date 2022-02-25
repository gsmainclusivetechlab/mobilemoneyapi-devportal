<?php
require_once __DIR__ . './../bootstrap.php';
use mmpsdk\Common\Models\Transaction;
use mmpsdk\Common\Exceptions\MobileMoneyException;
use mmpsdk\InternationalTransfer\InternationalTransfer;

$accountIdentifier = [
    'accountid' => 2000
];
try {
    /**
     * Construct request object and set desired parameters
     */
    $request = InternationalTransfer::viewAccountBalance($accountIdentifier);

    /**
     *Execute the request
     */
    $response = $request->execute();

    print_r($response);
} catch (MobileMoneyException $ex) {
    print_r($ex->getMessage());
    print_r($ex->getErrorObj());
}