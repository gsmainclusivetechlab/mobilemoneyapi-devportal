<?php
require_once __DIR__ . './../bootstrap.php';

use mmpsdk\Common\Exceptions\MobileMoneyException;
use mmpsdk\AgentService\AgentService;

$accountIdentifier = [
    'walletId' => 1
];
try {
    /**
     * Construct request object and set desired parameters
     */
    $request = AgentService::viewAccountName($accountIdentifier);

    /**
     *Execute the request
     */
    $response = $request->execute();

    print_r($response);
} catch (MobileMoneyException $ex) {
    print_r($ex->getMessage());
    print_r($ex->getErrorObj());
}