<template>
  <div class="dashboard-modal">
    <div class="content-wrap">
      <div class="modal-container">
        <button class="close-btn" @click="() => $emit('close', false)"></button>
        <span class="modal-title">Do you confirm this action?</span>
        <div class="btn-row">
          <button
              class="btn btn--accent-close"
              type="button"
              @click="() => $emit('close', false)"
          >Cancel</button>
          <button
              class="btn btn--accent"
              type="button"
              @click="() => $emit('close', true)"
          >Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>
