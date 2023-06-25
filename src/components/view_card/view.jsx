import React from 'react'
import './view.css'

function view() {
    function show() {
        const modal = document.querySelector('[data-model]');
        if (modal) {
          modal.showModal();
        }
      }
  return (
    <>
    <button id='btn' onClick={show}>Click me</button>
    <dialog data-model className='viewCardContainer'>
        view
    </dialog>
    </>
  )
}

export default view