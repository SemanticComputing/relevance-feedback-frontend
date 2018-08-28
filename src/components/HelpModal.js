import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class HelpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <span class="help">
        <Button color="info" onClick={this.toggle}>Ohje</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Toffee - käyttöohje</ModalHeader>
          <ModalBody>
            <p>
              Haku toimii syöttämällä aluksi hakusanoja, joilla haku ohjataan laveasti haluttuun suuntaan, ja painamalla 'Hae'. Tämän jälkeen hakua suunnataan antamalla palautetta saaduista tuloksista valitsemalla yksittäisille tuloksille peukalo ylös tai alas sen mukaan olivatko ne mielenkiintoisia tai ei-mielenkiintoisia. Jos tuloksesta ei osaa sanoa, palautteen voi sen kohdalta voi jättää antamatta.
            </p>
            <p>
              Hakusanoille haetaan vaihtoehtoisia arvoja KOKO-ontologiasta, jotka ovat laajempia tai suppeampia käsitteitä, synonyymejä tai muuten hakusanaan liittyviä käsitteitä.
              Järjestelmän lisäämiä ei-mieluisia hakusanoja voi poistaa klikkaamalla niitä.
            </p>
            <p>
              YLE-haku suunnataan YLE:n uutisaineistoon, jolle jako topiikkeihin on tehty jo ennalta. Google-haku etsii tuloksia koko internetistä, ja jakaa saadun tulosjoukon topiikkeihin lennossa. Hakua voi vaihtaa näiden välillä, mutta <u>vaihtaessa ensimmäisen kerran palautteet jäävät huomioimatta.</u>
            </p>
            <p>
              Lisätietoja Toffeen toiminnasta löytyy julkaisusta <a target="_blank" href="https://seco.cs.aalto.fi/publications/2018/koho-et-al-toffee-demo-2018.pdf">Koho, Heino, Oksanen, Hyvönen: Toffee - Semantic Media Search Using Topic Modeling and Relevance Feedback. ISWC 2018 Posters & Demonstrations and Industry Tracks, CEUR Workshop Proceedings, Monterey, USA, October, 2018. </a>.
            </p>
            <p>
              Contact e-mail:<br />
              <a href="mailto:Seco-help@list.aalto.fi">Seco-help@list.aalto.fi</a>
            </p>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </span>
    );
  }
}

export default HelpModal;
