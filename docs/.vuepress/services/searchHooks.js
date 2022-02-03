export default {
  async onGoToSuggestion(/* index, suggestion, queryString, queryTerms */) {
    window.localStorage.setItem('delayAfterSearch', 'true')
    setTimeout(()=> {
      window.localStorage.setItem('delayAfterSearch', 'false')
    }, 500)
  },
}
