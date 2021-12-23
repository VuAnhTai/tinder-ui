import React, { useState, useEffect, useRef } from 'react'
import { firestore } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";

import TinderCards from '../../components/TinderCards'
import SwipeButtons from '../../components/SwipeButtons'
function BodyTinder() {
  const [users, setPeople] = useState([] as any)
  const childRef = useRef() as any;

  useEffect(() => {
    async function fetchData() {
      const userCollection = collection(firestore,'user');
      const snapshot = await getDocs(userCollection);
      const data = snapshot.docs.map(doc => doc.data())
      setPeople(data)
    }

      fetchData()
  }, [])

  const clickRight = () => {
    childRef.current.swipe('right')
  }

  const clickLeft = () => {
    childRef.current.swipe('left')
  }

  return (
    <>
      <TinderCards ref={childRef} users={users} ></TinderCards>
      <SwipeButtons clickRight={clickRight} clickLeft={clickLeft}></SwipeButtons>
    </>
  )
}

export default BodyTinder
