import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { AddFormStyled } from "./AddForm.styled";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import * as Yup from "yup";
import { Notification } from "./Notification";

type FormValues = {
	name: string;
	address: string;
	lat: number;
	lon: number;
	capacity: number;
};

const initFormValues: FormValues = {
	name: "",
	address: "",
	lat: 0,
	lon: 0,
	capacity: 0,
};

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	address: Yup.string().required("Required"),
	lat: Yup.number().required("Required"),
	lon: Yup.number().required("Required"),
	capacity: Yup.number().required("Required"),
});

export const AddStation = () => {
	const [formValue, setFormValue] = useState<FormValues>(initFormValues);
	const [loading, setLoading] = useState<boolean>(false);
	const [notification, setNotification] = useState<{
		show: boolean;
		message: string;
		type: "success" | "error";
	}>({
		show: false,
		message: "",
		type: "success",
	});

	useEffect(() => {
		const compareFormValues = (a: FormValues, b: FormValues) => {
			return JSON.stringify(a) === JSON.stringify(b);
		};

		if (!compareFormValues(formValue, initFormValues)) {
			setLoading(true);
			console.log({
				name: formValue.name,
				address: formValue.address,
				lat: parseFloat(formValue.lat.toString()),
				lon: parseFloat(formValue.lon.toString()),
				capacity: parseInt(formValue.capacity.toString()),
			});
			setLoading(false);
		}
	}, [formValue]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<Notification
						show={notification.show}
						message={notification.message}
						type={notification.type}
					/>
					<AddFormStyled>
						<Formik
							initialValues={formValue}
							onSubmit={(values, { setSubmitting, resetForm }) => {
								setSubmitting(false);
								resetForm();
								setFormValue(values);
							}}
							validationSchema={validationSchema}
						>
							{({ values, handleChange, touched, errors }) => (
								<Form>
									<div className="form-group">
										<label htmlFor="name">Name</label>
										<input
											type="text"
											name="name"
											id="name"
											value={values.name}
											onChange={handleChange}
										/>
										{touched.name && errors.name && (
											<div className="error">{errors.name}</div>
										)}
									</div>
									<div className="form-group">
										<label htmlFor="address">Address</label>
										<input
											type="text"
											name="address"
											id="address"
											value={values.address}
											onChange={handleChange}
										/>
										{touched.address && errors.address && (
											<div className="error">{errors.address}</div>
										)}
									</div>
									<div className="form-group">
										<label htmlFor="lat">Latitude</label>
										<input
											type="number"
											name="lat"
											id="lat"
											value={values.lat}
											onChange={handleChange}
										/>
										{touched.lat && errors.lat && (
											<div className="error">{errors.lat}</div>
										)}
									</div>
									<div className="form-group">
										<label htmlFor="lon">Longitude</label>
										<input
											type="number"
											name="lon"
											id="lon"
											value={values.lon}
											onChange={handleChange}
										/>
										{touched.lon && errors.lon && (
											<div className="error">{errors.lon}</div>
										)}
									</div>
									<div className="form-group">
										<label htmlFor="capacity">Capacity</label>
										<input
											type="number"
											name="capacity"
											id="capacity"
											value={values.capacity}
											onChange={handleChange}
										/>
										{touched.capacity && errors.capacity && (
											<div className="error">{errors.capacity}</div>
										)}
									</div>
									<button type="submit" className="submit-btn">
										Submit
									</button>
								</Form>
							)}
						</Formik>
					</AddFormStyled>
				</>
			)}
		</>
	);
};
