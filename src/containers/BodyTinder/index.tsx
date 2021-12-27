import React, { useState, useEffect, useRef } from 'react'
import TinderCards from '../../components/TinderCards'
import SwipeButtons from '../../components/SwipeButtons'

import { getUsers } from '../../api/user'

function BodyTinder() {
  const [users, setPeople] = useState([] as any)
  const childRef = useRef() as any;

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data } : any = await getUsers()
    setPeople(data || [])
  }

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
