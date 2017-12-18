/* Energi Proposal Creator
*
* The following JSON represents an Energi proposal object that can be submitted to the blockchain.
* The purpose of this app is to create and validate this data based on user input, and then prepare
* the commands a user would use to submit this object to the Energi blockchain.

[
   [
      "proposal",
      {
         "end_epoch":1521329930,
         "name":"TITLE",
         "payment_address":"someaddr",
         "payment_amount":1337,
         "start_epoch":1513603490,
         "type":1,
         "url":"https://example.com/title-proposal"
      }
   ]
]
*/

import React, { Component } from 'react';
import TextInputField from './TextInputField.js';
import SelectFirstPayment from './SelectFirstPayment.js';
import SelectPaymentCycles from './SelectPaymentCycles.js';

class PrepareForm extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
        <div className="App-prepareForm">
          <form>
            <TextInputField fieldLabel="Proposal Name" fieldName="name" onChange={this.props.onChange} />
            <TextInputField fieldLabel="Proposal Description URL" fieldName="url" onChange={this.props.onChange} />
            <SelectFirstPayment onChange={this.props.onChange} />
            <SelectPaymentCycles onChange={this.props.onChange} />
            <TextInputField fieldLabel="Payment Address" fieldName="payment_address" onChange={this.props.onChange} />
            <TextInputField fieldLabel="Payment Amount" fieldName="payment_amount" onChange={this.props.onChange} />
          </form>
        </div>
    );
  }
}

export default PrepareForm;