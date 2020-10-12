export default function (context) {
  // eslint-disable-next-line no-console
  if (!context.store.getters.isAuthenticated) context.redirect('/login')
}
