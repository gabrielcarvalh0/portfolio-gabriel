/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image'
import React, { useState } from 'react'

import { VscChromeClose } from 'react-icons/vsc'
export function Modal(props) {

  return (
    <>
      <div className={`modal ${props.open === true ? 'isOpen' : 'isClosed'}`}>
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={(e) => props.onClose()}>
              <VscChromeClose />
            </button>
          </div>
          <div className="modal-body">
            <span>{props.title}</span>

            <div className="modal-img">
              <img src={props.img} />
            </div>

            <p>{props.desc}</p>
            <p>{props.tolls}</p>
          </div>
        </div>
      </div>
    </>
  )
}
