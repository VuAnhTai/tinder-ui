import React, { useState, useEffect, useRef } from 'react'
import TinderCards from '../../components/TinderCards'
import SwipeButtons from '../../components/SwipeButtons'

import { getUsers } from '../../api/user'

function BodyTinder({fetchDataAgain}:any) {
  const [users, setPeople] = useState([] as any)
  const [actions, setActions] = useState([] as any)
  const childRef = useRef() as any;

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data } : any = await getUsers()
    setActions([...data.actions] || [])
    setPeople([...data.users] || [])
  }

  const clickRight = () => {
    childRef.current.swipe('right')
  }

  const clickLeft = () => {
    childRef.current.swipe('left')
  }

  return (
    <>
      <TinderCards ref={childRef} users={users} actions={actions} fetchDataAgain={fetchDataAgain}></TinderCards>
      <SwipeButtons clickRight={clickRight} clickLeft={clickLeft} clickReload={fetchData}></SwipeButtons>
    </>
  )
}

export default BodyTinder
