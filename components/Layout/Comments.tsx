import React, { FunctionComponent } from 'react'
import { Paper } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

// @ts-ignore
const useStyles = makeStyles(() => ({
  comments: {
    position: 'fixed',
  },
}))

type CommentsProps = {}

export const Comments: FunctionComponent<CommentsProps> = (props) => {
  const styles = useStyles()
  return (
    <div className={styles.comments}>
      <ul>
        <li>comment 1</li>
        <li>comment 2</li>
      </ul>
    </div>
  )
}
export default Comments
