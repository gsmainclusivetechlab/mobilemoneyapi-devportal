<template>
  <div class="dashboard-modal">
    <div class="content-wrap">
      <div class="modal-container modal-container__confirmation">
        <button class="close-btn" @click="() => $emit('close', false)"></button>
        <span class="h3 modal-title">Do you confirm this action?</span>
        <div class="btn-row">
          <button
              class="btn btn--accent-close"
              type="button"
              @click="() => $emit('close', false)"
          >Cancel
          </button>
          <button
              class="btn btn--accent"
              type="button"
              @click="() => $emit('close', true)"
          >Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
