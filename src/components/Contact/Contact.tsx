import React from "react";
import Titles from "../Titles/Titles";
import * as C from "./style";
import { FaRegMap, FaEnvelope, FaAddressBook } from "react-icons/fa";
import LateralBar from "../LateralBar/LateralBar";
import { useForm, SubmitHandler } from "react-hook-form";
import pat1 from "../../assets/pat1.png";
import BoxAnimation from "../../hooks/useAnimationsScroll";

type Inputs = {
  fullname: string;
  email: string;
  subject: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <C.ContainerContactForm id="contact">
      <Titles
        title="ENTRE EM CONTATO"
        subtitle="VAMOS"
        secondSubtitle="Falar de Ideias"
      />
      <BoxAnimation>
        <C.ContainerContact>
          <C.LeftSideInfos>
            <div className="principal-title">
              <div className="container-icon">
                <FaRegMap className="icon" />
              </div>
              <div className="container-title">
                <h2 className="title">Endereço</h2>
                <p className="text">Maringá, Paraná, Brasil</p>
              </div>
            </div>

            <div className="principal-title">
              <div className="container-icon">
                <FaEnvelope className="icon" />
              </div>
              <div className="container-title">
                <h2 className="title">Email</h2>
                <p className="text">dev.rodrigomolina@gmail.com</p>
              </div>
            </div>

            <div className="principal-title">
              <div className="container-icon">
                <FaAddressBook className="icon" />
              </div>
              <div className="container-title">
                <h2 className="title">Telefone / Whatsapp</h2>
                <p className="text">(44) 99807-0146</p>
              </div>
            </div>
          </C.LeftSideInfos>

          <C.RightSideForm onSubmit={handleSubmit(onSubmit)}>
            <div className="name">
              <label htmlFor="full-name">
                SEU NOME COMPLETO <span>*</span>
              </label>
              <input id="full-name" {...register("fullname")} />
              {errors.fullname && <span>This field is required</span>}
            </div>
            <div className="email">
              <label htmlFor="email">
                SEU EMAIL <span>*</span>
              </label>
              <input id="email" {...register("email", { required: true })} />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="subject">
              <label htmlFor="subject">
                ASSUNTO <span>*</span>
              </label>
              <input
                id="subject"
                {...register("subject", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="message-area">
              <label htmlFor="message">
                SUA MENSAGEM <span>*</span>
              </label>
              <textarea
                name="message"
                id="message"
                cols={70}
                rows={10}
              ></textarea>
            </div>

            <div className="send">
              <p className="conditions">* Aceite os termos e condições.</p>
              <button className="btn-send">Enviar mensagem</button>
            </div>
            <img className="pat" src={pat1} alt="" />
          <div className="bar-lateral">
            <LateralBar />
          </div>
          </C.RightSideForm>
        </C.ContainerContact>
        <h1 className="bg-text">Contatos</h1>
      </BoxAnimation>
    </C.ContainerContactForm>
  );
};

export default Contact;
