import React, { FunctionComponent, useEffect, useState } from "react";
import { TTableUserComponent } from "../../models/components/user.model";
import useCommonHelper from "../../helpers/common.helper";
import ButtonComponent from "../button.common";
import { Card } from "react-bootstrap";

import CreateUserModalComponent from "../../modals/modal.createUser";
import {
	TypesUser,
	TypesUserConfig,
	UserListClass,
} from "../../models/data/data.user";
import { UserProvider } from "../../providers/user.provider";
import {
	HTTPErrorResponse,
	TPagedResponseHTTPDATA,
} from "../../models/http/common.http";
const TableUserComponent: FunctionComponent<TTableUserComponent> = ({
	typeUser = TypesUser.admin,
	...others
}) => {
	const { translate, showAlert } = useCommonHelper();
	const [page, setPage] = useState(1);
	const [usersList, setUsers] = useState<UserListClass>(new UserListClass());
	const { users, hasMore } = usersList;
	useEffect(() => {
		getUsers();
	}, [page]);

	const onComplete = ({ hasMore, ...res }: UserListClass) => {
		setUsers({
			users: page == 1 ? res.users : [...users, ...res.users],
			hasMore,
		});
	};

	const onError = (err: HTTPErrorResponse) => {
		showAlert(err.message, "error");
	};

	const getUsers = () =>
		UserProvider.getByType({
			type: typeUser,
			page,
			size: 10,
		})
			.then(onComplete)
			.catch(onError);

	const nextPage = () => setPage(page + 1);

	const resetList = () => {
		if (page === 1) {
			getUsers();
		}
		setPage(1);
	};

	return (
		<div className=" w-100 m-auto">
			<div className="w-100 d-flex justify-content-between flex-wrap align-items-center p-3 shadow  content-header-root-sticky">
				<div className="h2 d-flex align-items-center col-md-6">
					{translate(TypesUserConfig[typeUser].legend)}
				</div>
				<div className="col-md-6 d-flex justify-content-end">
					<CreateUserModalComponent typeUser={typeUser} okRegister={resetList} />
				</div>
			</div>
			<div className="py-3 px-3">
				{users.map((user) => (
					<Card key={user.id} className="my-2">
						<Card.Header>Usuario: {user.user}</Card.Header>
						<Card.Body>
							<Card.Title>
								Nombre: {user.name} {user.last}
							</Card.Title>
							<Card.Text>
								Email: {user.email} Telefono: {user.phone}
							</Card.Text>
						</Card.Body>
					</Card>
				))}
				{hasMore && (
					<ButtonComponent isLoading={false} onClick={nextPage}>
						load more
					</ButtonComponent>
				)}
			</div>
		</div>
	);
};

export default TableUserComponent;
