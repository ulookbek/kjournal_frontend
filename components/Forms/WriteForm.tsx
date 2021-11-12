import React, { FunctionComponent } from 'react'
import { TextField } from '@mui/material'
import EditorJS from '@editorjs/editorjs'

type WriteFormProps = {}

export const WriteForm: FunctionComponent<WriteFormProps> = (props) => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Введите текст..',
    })
  }, [])
  return (
    <>
      <TextField placeholder={'Text'} label={'Text editor'} fullWidth />
      <div id="editor" />
    </>
  )
}
export default WriteForm
