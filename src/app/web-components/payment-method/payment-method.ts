import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Card } from '../../types/card.type';

@customElement('payment-method')
export class PaymentMethod extends LitElement {
  static override styles = css`
    h3 {
      text-align: center;
    }

    div {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      padding: 0;
    }

    input {
      border: none;
      margin: 0;
      height: 3em;
    }

    #cardNumber {
      width: 65%;
    }

    #expirationDate {
      width: 20%;
    }

    #cvc {
      width: 10%;
    }
  `;

  @property({ type: Object })
  card: { [key: string]: any } = {
    cardNumber: '',
    expirationDate: '',
    cvc: '',
  };

  override render() {
    return html` <h3>Enter card details</h3>
      <div>
        <input 
          id="cardNumber"
          @change=${this.handleEdit}
          type="text"
          name="cardNumber"
          placeholder="Card number"
        />
        <input
          id="expirationDate"
          @change=${this.handleEdit}
          type="text"
          width="20%"
          name="expirationDate"
          placeholder="MM/YY"
        />
        <input
          id="cvc"
          @change=${this.handleEdit}
          type="text"
          width="10%"
          name="cvc"
          placeholder="CVC"
        />
      </div>`;
  }

  /**
   * @todo Define a better validation and better form data binding
   * @see https://netbasal.com/supercharge-your-forms-in-web-components-with-lit-5df42430907a
   */
  private handleEdit(e: Event) {
    let el: 'cardNumber' | 'expirationDate' | 'cvc' = (
      e.target as HTMLInputElement
    ).getAttribute('name') as 'cardNumber' | 'expirationDate' | 'cvc';

    this.card[el] = (e.target as HTMLInputElement).value;

    if (
      this.card['cardNumber'] !== '' &&
      this.card['expirationDate'] !== '' &&
      this.card['cvc'] !== ''
    ) {
      this.dispatchEvent(
        new CustomEvent('enterCardInfos', {
          detail: this.card,
        })
      );
    }
  }
}
