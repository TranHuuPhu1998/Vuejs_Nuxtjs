export default function (context) {
  if (process.clients) context.store.dispatch('initAuth')
}
