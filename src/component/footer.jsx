import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Facebook } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Google } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';

export default function FooterComp() {
  return (
    <MDBFooter className='text-center'  style={{
      backgroundColor: "rgb(6, 6, 69)",
    }} data-bs-theme="dark" color='white'>
      {/* color='white' bgColor='dark' */}
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light"  floating className='m-1' href='#!' role='button'>
            <Facebook/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <Twitter/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <Google/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <Instagram/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <Linkedin/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <Github/>
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Solicitá asesor, envianos tu Email.</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Enviar
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          Descubre el potencial que tu negocio puede alcanzar en el vasto mundo digital. Juntos podemos construir una presencia en línea que impulse tu marca, atraiga clientes y desbloquee nuevas oportunidades. 
          </p>
        </section>

      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:_ 
        <a className='text-white' href='http://localhost:3000/#home'>
         BlueBeam. Tecnología e Innovación
        </a>
      </div>
    </MDBFooter>
  );
}