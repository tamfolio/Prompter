"use client"
import { useSession } from 'next-auth/react'
import React,{useState} from 'react'
import { useRouter } from 'next/router'
import Form from '@components/Form'

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    });
  return (
   <Form/>
  )
}

export default CreatePrompt
