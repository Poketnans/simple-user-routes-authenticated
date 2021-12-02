import { useSelector } from "react-redux";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";

const Route = ({ isPrivate, component: Component, ...rest }) => {
  const { token } = useSelector((state) => state.user);

  // a prop render trata como será a renderição do componente Route
  // Temos 4 possibilidades de autenticação
  // 1 - Rota privada e usuário não logado -> direcionar para a home
  // 2 - Rota pública e usuário logado     -> direcionar para o dashboard
  // 3 - Rota pública e usuário não logado -> Renderizar o componente
  // 4 - Rota privada e usuário logado     -> Renderizar o componente

  return (
    <ReactDOMRoute
      {...rest}
      render={() =>
        !!isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};

export default Route;
