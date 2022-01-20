---
sidebarDepth: 2
pageClass: api-page
title: Downloads
---

## Retrieval of Bill Payments

Added new endpoints to allow API clients to retrieve a bill payment:

*   _GET /accounts/{identifierType}/{identifier}/bills/{billReference}/payments_.
*   _GET /accounts/{Account Identifiers}/bills/{billReference}/payments_.

Standard query string parameters and response headers have been included to enabled filtering of bill payments:

*   _X-Records-Available-Count_ response header. Informs the client the number of records that can be returned.
*   _X-Records-Returned-Count_ response header. Informs the client how many records have been returned.
*   _limit_ query string. Used by the client to constrain the number of records returned.
*   _offset_ query string. Used by the client to indicate the position from where records are to be returned.
*   _fromdatetime_ query string. Used by the client to return records within a date range based on _creationDate_.
*   _todatetime_ query string. Used by the client to return records within a date range based on _creationDate_.

<template>
      <div class="buttons-holder content-center get-started__btn-holder">
        <router-link
            to="/"
            class="btn"
        > Get information
        </router-link>
        <router-link
            to="/"
            class="btn btn--accent"
        > Download
        </router-link>
      </div>
</template>
