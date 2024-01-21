import React, { useState } from "react"
import { useForm } from "react-hook-form"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { useSnackbar } from "notistack"
import { useCreateLecturer } from "../../hooks/use-api"
const LecturerForm = ({ onClose }) => {
    const [nameSubmitted, setNameSubmitted] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { enqueueSnackbar } = useSnackbar()

    const onSubmitName = () => {
        setNameSubmitted(true)
    }

    const { mutateAsync: createLecturer } = useCreateLecturer()

    const onSubmitBio = async data => {
        try {
            const { bio, name } = data
            await createLecturer({ bio, name })
            enqueueSnackbar("success registered as lecturer", {
                variant: "success",
                anchorOrigin: { horizontal: "right", vertical: "top" },
                autoHideDuration: 2000,
            })
            onClose()
        } catch (error) {
            enqueueSnackbar(error.message, {
                variant: "error",
                anchorOrigin: { horizontal: "right", vertical: "top" },
                autoHideDuration: 2000,
            })
        }
    }

    return (
        <div>
            {!nameSubmitted ? (
                <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    gap={2}
                    justifyContent="center"
                    component={"form"}
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmitName)}
                >
                    <TextField
                        fullWidth
                        label="What is your name?"
                        variant="outlined"
                        error={!!errors.name}
                        helperText={errors.name ? "This field is required" : ""}
                        {...register("name", { required: true })}
                    />
                    <Button type="submit" variant="outlined" fullWidth color="primary">
                        Next
                    </Button>
                </Box>
            ) : (
                <Box
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    alignItems="center"
                    justifyContent="center"
                    autoComplete="off"
                    component={"form"}
                    onSubmit={handleSubmit(onSubmitBio)}
                >
                    <TextField
                        label="What is your bio?"
                        variant="outlined"
                        multiline
                        rows={3}
                        fullWidth
                        error={!!errors.bio}
                        helperText={errors.bio ? "This field is required" : ""}
                        {...register("bio", { required: true })}
                    />
                    <Box display="flex" gap={2} justifyContent="center" width="100%">
                        <Button type="submit" fullWidth variant="contained" color="info">
                            prev
                        </Button>
                        <Button type="submit" fullWidth variant="outlined" color="primary">
                            Submit
                        </Button>
                    </Box>
                </Box>
            )}
        </div>
    )
}

export default LecturerForm
