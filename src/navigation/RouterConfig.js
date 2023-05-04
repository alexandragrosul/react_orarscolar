
export const RouterConfig = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/repetitori" component={Home} />
      <Route exact path="/repetitori/:id" component={Repetitor} />
    </Switch>
  );
};

export default RouterConfig;
