import React, {useState, useEffect} from 'react'


const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    /* const onBlurField = () => {
        setEditMode(false)
        console.log('editMode:', editMode)
    } */

    const toggleEditMode = (e) => {
        if(editMode) {
            e.preventDefault()
            props.updateStatus(status)
            setEditMode(false)
            return undefined
        }
        setEditMode(true)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <>
        {editMode
            ?   <StatusForm
                    styles={props.styles}
                    status={status}
                    onStatusChange={onStatusChange}
                    toggleEditMode={toggleEditMode}
                    /* onBlurField={onBlurField} */
                />
            :   <span
                    className={props.styles.status}
                    onClick={toggleEditMode}
                >
                    {props.status || 'set a status message'}
                </span>
        }
    </>
}

const StatusForm = (props) => {
    return <form>
        <input
            className={props.styles.statusField}
            autoFocus={true}
            onChange={props.onStatusChange}
            value={props.status}
        />
        <button onClick={props.toggleEditMode}>Save</button>
    </form>
}



export default ProfileStatus