import React, {Component} from "react";
import {
  Row,
  Col,
  CardBody,
  Button,
  Input, ModalHeader, ModalBody, ModalFooter, Modal,
} from "reactstrap";
import logo from '../../assets/img/brand/2.png'
import styles from '../../views/Report/Report.css';
import {data} from '../../constants/ActionTypes';
import LocalizedStrings from 'react-localization';
import client from "../../api";

let strings = new LocalizedStrings(data);


class EmailAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_mobile: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleDanger() {
    this.setState({
      danger: !this.state.danger
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({is_mobile: window.innerWidth <= 760});
  }


  continue = e => {
    const {values} = this.props;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(values.email) && values.phone) {
      client.put('/api/shareholders/' + values._id, {
        email: values.email,
        phone: values.phone,
        updated_time: Date.now(),
      })
        .then((response) => {
          if (response.data.message === "OK") {
            const language = localStorage.getItem('language');
            localStorage.clear();
            localStorage.setItem('language', language);
            this.props.nextStep();
          } else {
            this.toggleDanger();
          }
        })
        .catch((error) => {
          this.toggleDanger();
        });
    } else {
      this.toggleDanger();
    }

  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  render() {
    const language = localStorage.getItem('language') ? localStorage.getItem('language') : 'vi';
    strings.setLanguage(language);
    const {values, handleChange} = this.props;

    return (
      <div className="animated fadeIn">
        {this.state.is_mobile ?
          <Row>
            <Col className="text-center">
              <img src={logo} className={styles.logo}
                   alt="N/A"/>

            </Col>
          </Row>
          :
          <Row>
            <Col className="text-center">
              <img src={logo} className={styles.logoPC}
                   alt="N/A"/>

            </Col>
          </Row>
        }
        <Row>
          <Col className="text-center">
            <span className={styles.titleLogoStyle}>{strings.brand}</span>
          </Col>
        </Row>
        <br/>
        <br/>
        <div className="card">
          <CardBody>
            <Row>
              <Col className="text-center">
                <span className={styles.titleInformStyle}>{strings.email_command}</span>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <span className={styles.noteStyle}>{strings.note_email_command}</span>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col className="was-validated text-center">
                <Input type="text" className="form-control-warning" name="email"
                       onChange={handleChange('email')}
                       defaultValue={values.email}
                       data-placement="right"
                       placeholder="Email"
                       required/>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col className="was-validated text-center">
                <Input type="text" className="form-control-warning" name="phone"
                       onChange={handleChange('phone')}
                       defaultValue={values.phone}
                       data-placement="right"
                       placeholder="Phone"
                       required/>
              </Col>
            </Row>
            <br/>
            <br/>
            <Row>

              <Col className="text-center">
                <button onClick={this.back} className={styles.buttonPrev}>{strings.prev_button}</button>
              </Col>
              <Col className="text-center">
                <button onClick={this.continue} className={styles.button}>{strings.button_finish}</button>
              </Col>
            </Row>
          </CardBody>
        </div>
        <Modal isOpen={this.state.danger} toggle={this.toggleDanger}
               className={'modal-warning ' + this.props.className}>
          <ModalHeader toggle={this.toggleDanger}>{strings.notify}</ModalHeader>
          <ModalBody>
            {strings.alert_5}
          </ModalBody>
          <ModalFooter className="text-center">
            <button color="secondary" onClick={this.toggleDanger}>{strings.confirm}</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EmailAdd;
