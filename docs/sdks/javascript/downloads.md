---
sidebarDepth: 2
pageClass: api-page
title: Downloads
---

## Retrieval of Multiple Authorisation Codes

Allows multiple authorisation codes to be retrieved for a given account via the following new endpoints:

*   _GET_ _/accounts/{identifierType}/{identifier}/authorisationcodes_.
*   _GET_ _/accounts/{Account Identifiers}/authorisationcodes_.

Standard query string parameters and response headers have been included to enabled filtering of authorisation codes:

*   _X-Records-Available-Count_ response header. Informs the client the number of records that can be returned.
*   _X-Records-Returned-Count_ response header. Informs the client how many records have been returned.
*   _limit_ query string. Used by the client to constrain the number of records returned.
*   _offset_ query string. Used by the client to indicate the position from where records are to be returned.
*   _fromdatetime_ query string. Used by the client to return records within a date range.
*   _todatetime_ query string. Used by the client to return records within a date range.

Also added a ‘_codestate_’ filter to return authorisation codes for a given state.

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
