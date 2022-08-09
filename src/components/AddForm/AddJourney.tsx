import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { AddFormStyled } from "./AddForm.styled";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { stationOptions } from "../../types";
import { Loading } from "../Loading/Loading";
import * as Yup from "yup";
import { Notification } from "./Notification";

type FormValues = {
	departure_station_id: number;
	return_station_id: number;
	departure_time: string;
	return_time: string;
	distance: number;
};

const initFormValues: FormValues = {
	departure_station_id: 1,
	return_station_id: 1,
	departure_time: new Date().toISOString(),
	return_time: new Date().toISOString(),
	distance: 0,
};

const validationSchema = Yup.object().shape({
	departure_station_id: Yup.number().required("Required"),
	return_station_id: Yup.number().required("Required"),
	departure_time: Yup.string().required("Required"),
	return_time: Yup.string().required("Required"),
	distance: Yup.number().required("Required"),
});

export const AddJourney = () => {
	const [formValue, setFormValue] = useState<FormValues>(initFormValues);
	const [loading, setLoading] = useState<boolean>(false);
	const [stations, setStations] = useState<stationOptions[]>([]);
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
		setLoading(true);
		axios
			.get("https://bike-app-rest-api.herokuapp.com/api/station/stationOptions")
			.then((res) => {
				setStations(res.data);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		const compareFormValues = (a: FormValues, b: FormValues) => {
			// compares the form values and time up to minute precision
			return (
				a.departure_station_id === b.departure_station_id &&
				a.return_station_id === b.return_station_id &&
				a.departure_time.split(":", 2).join(":") ===
					b.departure_time.split(":", 2).join(":") &&
				a.return_time.split(":", 2).join(":") ===
					b.return_time.split(":", 2).join(":") &&
				a.distance === b.distance
			);
		};

		if (!compareFormValues(formValue, initFormValues)) {
			console.log("Adding journey");
			console.log({
				departure_station: parseInt(formValue.departure_station_id.toString()),
				return_station: parseInt(formValue.return_station_id.toString()),
				covered_distance: parseFloat(formValue.distance.toString()),
				departure_time: formValue.departure_time,
				return_time: formValue.return_time,
				month: new Date(formValue.departure_time).toLocaleString("en-us", {
					month: "long",
				}),
			});
			setLoading(true);
			axios
				.post(
					"https://bike-app-rest-api.herokuapp.com/api/journey/add",
					{
						departure_station: parseInt(
							formValue.departure_station_id.toString()
						),
						return_station: parseInt(formValue.return_station_id.toString()),
						covered_distance: parseFloat(formValue.distance.toString()),
						departure_time: formValue.departure_time,
						return_time: formValue.return_time,
						month: new Date(formValue.departure_time).toLocaleString("en-us", {
							month: "long",
						}),
					},
					{
						headers: {
							pass: process.env.REACT_APP_PASS || "",
						},
					}
				)
				.then((res) => {
					setLoading(false);
					if (res.status === 200) {
						setNotification({
							show: true,
							message: "Journey added successfully",
							type: "success",
						});
						setFormValue(initFormValues);

						setTimeout(() => {
							setNotification({
								show: false,
								message: "",
								type: "success",
							});
						}, 3000);
					} else {
						setNotification({
							show: true,
							message: "Error adding journey",
							type: "error",
						});
						setTimeout(() => {
							setNotification({
								show: false,
								message: "",
								type: "error",
							});
						}, 3000);
					}
				})
				.catch((err) => {
					console.log(err);
					setNotification({
						show: true,
						message: "Error adding journey",
						type: "error",
					});
					setTimeout(() => {
						setNotification({
							show: false,
							message: "",
							type: "success",
						});
					}, 3000);
				});
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
										<label>Departure station</label>
										<select
											name="departure_station_id"
											value={values.departure_station_id}
											onChange={handleChange}
										>
											{stations.map((station) => {
												return (
													<option key={station.id} value={station.id}>
														{station.name}
													</option>
												);
											})}
										</select>
										{touched.departure_station_id &&
											errors.departure_station_id && (
												<div className="error">
													{errors.departure_station_id}
												</div>
											)}
									</div>
									<div className="form-group">
										<label>Return station</label>
										<select
											name="return_station_id"
											value={values.return_station_id}
											onChange={handleChange}
										>
											{stations.map((station) => {
												return (
													<option key={station.id} value={station.id}>
														{station.name}
													</option>
												);
											})}
										</select>
										{touched.return_station_id && errors.return_station_id && (
											<div className="error">{errors.return_station_id}</div>
										)}
									</div>

									<div className="date-picker">
										<label>Departure time</label>
										<DatePicker
											selected={new Date(values.departure_time)}
											onChange={(date: Date) => {
												handleChange({
													target: {
														name: "departure_time",
														value: date.toISOString(),
													},
												});
											}}
											showTimeInput
											className="date-picker"
											dateFormat={"dd/MM/yyyy HH:mm"}
										/>
									</div>
									{touched.departure_time && errors.departure_time && (
										<div className="error">{errors.departure_time}</div>
									)}
									<div className="date-picker">
										<label>Return time</label>
										<DatePicker
											selected={new Date(values.return_time)}
											onChange={(date: Date) => {
												handleChange({
													target: {
														name: "return_time",
														value: date.toISOString(),
													},
												});
											}}
											showTimeInput
											className="date-picker"
											dateFormat={"dd/MM/yyyy HH:mm"}
										/>
									</div>
									{touched.return_time && errors.return_time && (
										<div className="error">{errors.return_time}</div>
									)}

									<div className="form-group">
										<label>Distance in KM</label>
										<input
											type="text"
											name="distance"
											value={values.distance}
											onChange={handleChange}
										/>
										{touched.distance && errors.distance && (
											<div className="error">{errors.distance}</div>
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
