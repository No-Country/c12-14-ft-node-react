function ModalEditProfile({ edit, setEdit, user }) {
  return (
    <div>
      <button
        onClick={setEdit({
          ...edit,
          profile: false,
        })}
      >
        close
      </button>
      <h1>Edit Profile</h1>
    </div>
  )
}

export default ModalEditProfile
