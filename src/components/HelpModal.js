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
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <p>
              Haku toimii syöttämällä aluksi joitain sanoja, jonka jälkeen hakua suunnataan peukuttamalla tuloksia ylös tai alas, ja poistamalla järjestelmän lisäämiä ei-mieluisia hakusanoja klikkaamalla niitä.
              Hakusanoille haetaan vaihtoehtoisia arvoja KOKO-ontologiasta, jotka ovat lähinnä laajempia ja suppeampia käsitteitä.
            </p>

            <p>
              YLE-haku suunnataan YLE:n uutisaineistoon, jolle jako topiikkeihin on tehty jo ennalta. Google-haku etsii tuloksia koko internetistä, ja jakaa saadun tulosjoukon topiikkeihin lennossa. Hakua voi vaihtaa näiden välillä, mutta vaihtaessa ensimmäisen kerran peukutukset jäävät huomioimatta.
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
