// /docs/.vuepress/searchHooks.js
export default {
  // async processSuggestions(suggestions, queryString, queryTerms) {
  //   if (queryString) {
  //     // add a suggestion to start a search in an external service
  //     suggestions.push({
  //       path: 'https://sourcegraph.com/search?patternType=literal&q=',
  //       slug: queryString,
  //       parentPageTitle: 'Sourcegraph',
  //       title: 'Search code',
  //       contentStr: 'Search for "' + queryString + '" on Sourcegraph',
  //       external: true,
  //     })
  //   }
  //   return suggestions
  // },
  async onGoToSuggestion(index, suggestion, queryString, queryTerms) {
    // e.g. create an analytics event

    console.log('index: ', index);
    console.log('suggestion: ', suggestion);
    console.log('queryString: ', queryString);
    console.log('queryTerms: ', queryTerms);
    // const selector = location.hash
    // console.log(selector)
    // if (!selector || selector === '#') return
    // const el = document.querySelector(decodeURIComponent(selector))
    // console.log(el)
    // console.dir(document.querySelector(selector))
    // if (el && el.offsetTop) {
    //   window.scrollTo(0, el.offsetTop)
    // }

    // return true if you want to prevent default navigation
    // return true
  },
}
