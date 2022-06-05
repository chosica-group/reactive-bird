// import { withRouter } from "react-router";

// // Ah, this is nice and simple!
// <Route path=":userId" component={Profile} />

// // But wait, how do I pass custom props to the <Profile> element??
// // Hmm, maybe we can use a render prop in those situations?
// <Route
//   path=":userId"
//   render={routeProps => (
//     <Profile routeProps={routeProps} animate={true} />
//   )}
// />

// // Ok, now we have two ways to render something with a route. :/

// // But wait, what if we want to render something when a route
// // *doesn't* match the URL, like a Not Found page? Maybe we
// // can use another render prop with slightly different semantics?
// <Route
//   path=":userId"
//   children={({ match }) => (
//     match ? (
//       <Profile match={match} animate={true} />
//     ) : (
//       <NotFound />
//     )
//   )}
// />

// // What if I want to get access to the route match, or I need
// // to redirect deeper in the tree?
// function DeepComponent(routeStuff) {
//   // got routeStuff, phew!
// }
// export default withRouter(DeepComponent);
