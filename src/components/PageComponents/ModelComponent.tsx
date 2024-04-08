"use client";
import React from 'react'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export const ModelComponent = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>

      <Button className='rounded-3xl ' onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal   className=' bg-black border-0 '   show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header style={{borderTopLeftRadius:'100px'}}  className='  border-0 rounded-t-3xl '>Title</Modal.Header>
        <Modal.Body  className='border-0 '>
          <div className="space-y-6 ">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis vel dolore tempora modi consectetur enim natus distinctio repellendus officiis voluptas voluptate neque perferendis, placeat sunt repudiandae consequatur? Unde, quae.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit corporis aut aliquid sit consequuntur quod nihil necessitatibus voluptate modi asperiores, repellat delectus! Possimus est qui, cumque cupiditate architecto mollitia.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className='flex justify-end'  >
          {/* <Button onClick={() => setOpenModal(false)} >Close</Button> */}
          <Button style={{backgroundColor:'FF7A00',}} className=' rounded-xl text-black jura !imporant-hover:bg-orange-500 bg-orange-500 ' onClick={() => setOpenModal(false)}>
          <h4 className='text-2xl'>Close</h4> 
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}


