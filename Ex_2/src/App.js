import "./App.css";
import FormLogo from "./assets/logoHorizontal.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const currentDate = new Date().toLocaleDateString();
const dateFormated = currentDate.split("/").reverse().join("-");
const getFormatedDate = (currentDate) => {
  return currentDate.split("/").reverse().join("-");
};

console.log("Data formatada: ", dateFormated);
const schema = yup
  .object({
    name: yup.string().required("Informe o seu nome"),
    data: yup
      .date()
      .max(getFormatedDate(new Date().toLocaleDateString()))
      .min(getFormatedDate("01/01/1900"))
      .required("Campo obrigatório"),
    email: yup.string().email("Email Invalido").required("Informe seu Email"),
    Telefone: yup
      .string()
      .min(10, "Digite um telefone valido com DDD")
      .max(11, "Digite um numero valido com DDD Exemplo: 13974209777")
      .required("Informe seu numero"),
    bairros: yup.string().required("Selecione uma categoria"),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(userData) {
    console.log(userData);
  }
  return (
    <div class="container">
      <img src={FormLogo} alt="imagem" />
      <h1>Não encontrou o que procurava?</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form">
          <h2>Preencha o formulário e retornaremos o contato.</h2>
          <div class="colunas">
            <div class="c1">
              <div class="form__group field">
                <input
                  required=""
                  placeholder="Name"
                  class="form__field"
                  type="input"
                  {...register("name", { required: true })}
                />
                <label class="form__label" for="name">
                  Name
                </label>
                {errors.name && <span>{errors.name?.message}</span>}
              </div>
              <div class="form__group field">
                <input
                  required=""
                  placeholder="Data"
                  class="form__field"
                  type="date"
                  {...register("data", { required: true })}
                />
                <label class="form__label" for="Data">
                  Nascimento
                </label>
                {errors.data && <span>{errors.data?.message}</span>}
              </div>
              <div class="form__group field">
                <input
                  required=""
                  placeholder="Telefone"
                  class="form__field"
                  type="tel"
                  {...register("Telefone", { required: true })}
                />
                <label class="form__label" for="Telefone">
                  Telefone
                </label>
                {errors.Telefone && <span>{errors.Telefone?.message}</span>}
              </div>
              <div class="linha">
                <p>Melhor período para contato</p>
                <input
                  type="checkbox"
                  value="manha"
                  id="manha"
                  {...register("manha")}
                />{" "}
                <label for="manha">Manha</label>
                <input
                  type="checkbox"
                  value="Tarde"
                  id="Tarde"
                  {...register("tarde")}
                />{" "}
                <label for="Tarde">Tarde</label>
                <input
                  type="checkbox"
                  value="Noite"
                  id="Noite"
                  {...register("noite")}
                />{" "}
                <label for="Noite">Noite</label>
              </div>
            </div>
            <div class="c2">
              <div class="form__group field">
                <input
                  required=""
                  placeholder="Email"
                  class="form__field"
                  type="email"
                  {...register("email", { required: true })}
                />
                <label class="form__label" for="Email">
                  Email
                </label>
                {errors.email && <span>{errors.email?.message}</span>}
              </div>
              <div class="form__group field">
                <input
                  required=""
                  placeholder="Bairro"
                  class="form__field"
                  type="text"
                  list="bairros"
                  {...register("bairros", { required: true })}
                />
                {errors.bairros && <span>{errors.bairros?.message}</span>}
                <datalist id="bairros">
                  <option value="">Bairro Imperial de São Cristóvão</option>
                  <option value="Benfica">Benfica</option>
                  <option value="Caju">Caju</option>
                  <option value="Catumbi">Catumbi</option>
                  <option value="Centro">Centro</option>
                  <option value="Cidade Nova">Cidade Nova</option>
                  <option value="Estácio">Estácio</option>
                  <option value="Gamboa">Gamboa</option>
                  <option value="Glória">Glória</option>
                  <option value="Lapa">Lapa</option>
                  <option value="Mangueira">Mangueira</option>
                  <option value="Paquetá">Paquetá</option>
                  <option value="Rio Comprido">Rio Comprido</option>
                  <option value="Santa Teresa">Santa Teresa</option>
                  <option value="Santo Cristo">Santo Cristo</option>
                  <option value="Saúde">Saúde</option>
                  <option value="Vasco da Gama">Vasco da Gama</option>
                  <option value="Zona Sul">Zona Sul</option>
                </datalist>
                <label class="form__label" for="Bairro">
                  Bairro
                </label>
              </div>
              <div class="linha">
                <p>Autoriza contato por telefone? </p>
                <select {...register("autorizacao")}>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
              </div>
            </div>
          </div>
          <div class="linhateste">
            <button class="fancy" type="submit" href="#">
              <span class="top-key"></span>
              <span class="text">Enviar</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
