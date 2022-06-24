
// Search //

async function searchSiteUser($formFilters, success, error) {
	var filters = searchSiteUserFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSiteUserVals(filters, success, error);
}

function searchSiteUserFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var $filterSeeArchivedCheckbox = $formFilters.find('input.valueSeeArchived[type = "checkbox"]');
		var $filterSeeArchivedSelect = $formFilters.find('select.valueSeeArchived');
		var filterSeeArchived = $filterSeeArchivedSelect.length ? $filterSeeArchivedSelect.val() : $filterSeeArchivedCheckbox.prop('checked');
		var filterSeeArchivedSelectVal = $formFilters.find('select.filterSeeArchived').val();
		var filterSeeArchived = null;
		if(filterSeeArchivedSelectVal !== '')
			filterSeeArchived = filterSeeArchivedSelectVal == 'true';
		if(filterSeeArchived != null && filterSeeArchived === true)
			filters.push({ name: 'fq', value: 'seeArchived:' + filterSeeArchived });

		var $filterSeeDeletedCheckbox = $formFilters.find('input.valueSeeDeleted[type = "checkbox"]');
		var $filterSeeDeletedSelect = $formFilters.find('select.valueSeeDeleted');
		var filterSeeDeleted = $filterSeeDeletedSelect.length ? $filterSeeDeletedSelect.val() : $filterSeeDeletedCheckbox.prop('checked');
		var filterSeeDeletedSelectVal = $formFilters.find('select.filterSeeDeleted').val();
		var filterSeeDeleted = null;
		if(filterSeeDeletedSelectVal !== '')
			filterSeeDeleted = filterSeeDeletedSelectVal == 'true';
		if(filterSeeDeleted != null && filterSeeDeleted === true)
			filters.push({ name: 'fq', value: 'seeDeleted:' + filterSeeDeleted });

		var filterNarrativeKeys = $formFilters.find('.valueNarrativeKeys').val();
		if(filterNarrativeKeys != null && filterNarrativeKeys !== '')
			filters.push({ name: 'fq', value: 'narrativeKeys:' + filterNarrativeKeys });

		var filterEventKeys = $formFilters.find('.valueEventKeys').val();
		if(filterEventKeys != null && filterEventKeys !== '')
			filters.push({ name: 'fq', value: 'eventKeys:' + filterEventKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserName = $formFilters.find('.valueUserName').val();
		if(filterUserName != null && filterUserName !== '')
			filters.push({ name: 'fq', value: 'userName:' + filterUserName });

		var filterUserEmail = $formFilters.find('.valueUserEmail').val();
		if(filterUserEmail != null && filterUserEmail !== '')
			filters.push({ name: 'fq', value: 'userEmail:' + filterUserEmail });

		var filterUserFirstName = $formFilters.find('.valueUserFirstName').val();
		if(filterUserFirstName != null && filterUserFirstName !== '')
			filters.push({ name: 'fq', value: 'userFirstName:' + filterUserFirstName });

		var filterUserLastName = $formFilters.find('.valueUserLastName').val();
		if(filterUserLastName != null && filterUserLastName !== '')
			filters.push({ name: 'fq', value: 'userLastName:' + filterUserLastName });

		var filterUserFullName = $formFilters.find('.valueUserFullName').val();
		if(filterUserFullName != null && filterUserFullName !== '')
			filters.push({ name: 'fq', value: 'userFullName:' + filterUserFullName });
	}
	return filters;
}

function searchSiteUserVals(filters, success, error) {
	$.ajax({
		url: '/api/user?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSiteUserObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteUserVals($formFilters, success, error);
}

function suggestSiteUserNarrativeKeys(filters, $list, pk = null, relate=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-pen ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['assigneeKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_narrativeKeys_' + pk + '_assigneeKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueNarrativeKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_narrativeKeys_" + pk + "_assigneeKey_" + o['pk'] + "'); patchSiteUserVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'NarrativeKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(relate)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SiteUserForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchReportNarrativeVals(filters, success, error);
}

function suggestSiteUserEventKeys(filters, $list, pk = null, relate=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-star ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['assigneeKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_eventKeys_' + pk + '_assigneeKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEventKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_eventKeys_" + pk + "_assigneeKey_" + o['pk'] + "'); patchSiteUserVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EventKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(relate)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SiteUserForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchReportEventVals(filters, success, error);
}

// PATCH //

async function patchSiteUser($formFilters, $formValues, pk, success, error) {
	var filters = patchSiteUserFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').val();
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueSeeArchived = $formValues.find('.valueSeeArchived').val();
	var removeSeeArchived = $formValues.find('.removeSeeArchived').val() === 'true';
	var valueSeeArchivedSelectVal = $formValues.find('select.setSeeArchived').val();
	if(valueSeeArchivedSelectVal != null && valueSeeArchivedSelectVal !== '')
		valueSeeArchived = valueSeeArchivedSelectVal == 'true';
	var setSeeArchived = removeSeeArchived ? null : valueSeeArchived;
	var addSeeArchived = $formValues.find('.addSeeArchived').prop('checked');
	if(removeSeeArchived || setSeeArchived != null && setSeeArchived !== '')
		vals['setSeeArchived'] = setSeeArchived;
	if(addSeeArchived != null && addSeeArchived !== '')
		vals['addSeeArchived'] = addSeeArchived;
	var removeSeeArchived = $formValues.find('.removeSeeArchived').prop('checked');
	if(removeSeeArchived != null && removeSeeArchived !== '')
		vals['removeSeeArchived'] = removeSeeArchived;

	var valueSeeDeleted = $formValues.find('.valueSeeDeleted').val();
	var removeSeeDeleted = $formValues.find('.removeSeeDeleted').val() === 'true';
	var valueSeeDeletedSelectVal = $formValues.find('select.setSeeDeleted').val();
	if(valueSeeDeletedSelectVal != null && valueSeeDeletedSelectVal !== '')
		valueSeeDeleted = valueSeeDeletedSelectVal == 'true';
	var setSeeDeleted = removeSeeDeleted ? null : valueSeeDeleted;
	var addSeeDeleted = $formValues.find('.addSeeDeleted').prop('checked');
	if(removeSeeDeleted || setSeeDeleted != null && setSeeDeleted !== '')
		vals['setSeeDeleted'] = setSeeDeleted;
	if(addSeeDeleted != null && addSeeDeleted !== '')
		vals['addSeeDeleted'] = addSeeDeleted;
	var removeSeeDeleted = $formValues.find('.removeSeeDeleted').prop('checked');
	if(removeSeeDeleted != null && removeSeeDeleted !== '')
		vals['removeSeeDeleted'] = removeSeeDeleted;

	var valueNarrativeKeys = $formValues.find('input.valueNarrativeKeys:checked').val();
	if(valueNarrativeKeys != null && valueNarrativeKeys !== '')
		vals['addNarrativeKeys'] = valueNarrativeKeys;

	var valueEventKeys = $formValues.find('input.valueEventKeys:checked').val();
	if(valueEventKeys != null && valueEventKeys !== '')
		vals['addEventKeys'] = valueEventKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	var addSessionId = $formValues.find('.addSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valueUserId = $formValues.find('.valueUserId').val();
	var removeUserId = $formValues.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	var addUserId = $formValues.find('.addUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserName = $formValues.find('.valueUserName').val();
	var removeUserName = $formValues.find('.removeUserName').val() === 'true';
	var setUserName = removeUserName ? null : $formValues.find('.setUserName').val();
	var addUserName = $formValues.find('.addUserName').val();
	if(removeUserName || setUserName != null && setUserName !== '')
		vals['setUserName'] = setUserName;
	if(addUserName != null && addUserName !== '')
		vals['addUserName'] = addUserName;
	var removeUserName = $formValues.find('.removeUserName').val();
	if(removeUserName != null && removeUserName !== '')
		vals['removeUserName'] = removeUserName;

	var valueUserEmail = $formValues.find('.valueUserEmail').val();
	var removeUserEmail = $formValues.find('.removeUserEmail').val() === 'true';
	var setUserEmail = removeUserEmail ? null : $formValues.find('.setUserEmail').val();
	var addUserEmail = $formValues.find('.addUserEmail').val();
	if(removeUserEmail || setUserEmail != null && setUserEmail !== '')
		vals['setUserEmail'] = setUserEmail;
	if(addUserEmail != null && addUserEmail !== '')
		vals['addUserEmail'] = addUserEmail;
	var removeUserEmail = $formValues.find('.removeUserEmail').val();
	if(removeUserEmail != null && removeUserEmail !== '')
		vals['removeUserEmail'] = removeUserEmail;

	var valueUserFirstName = $formValues.find('.valueUserFirstName').val();
	var removeUserFirstName = $formValues.find('.removeUserFirstName').val() === 'true';
	var setUserFirstName = removeUserFirstName ? null : $formValues.find('.setUserFirstName').val();
	var addUserFirstName = $formValues.find('.addUserFirstName').val();
	if(removeUserFirstName || setUserFirstName != null && setUserFirstName !== '')
		vals['setUserFirstName'] = setUserFirstName;
	if(addUserFirstName != null && addUserFirstName !== '')
		vals['addUserFirstName'] = addUserFirstName;
	var removeUserFirstName = $formValues.find('.removeUserFirstName').val();
	if(removeUserFirstName != null && removeUserFirstName !== '')
		vals['removeUserFirstName'] = removeUserFirstName;

	var valueUserLastName = $formValues.find('.valueUserLastName').val();
	var removeUserLastName = $formValues.find('.removeUserLastName').val() === 'true';
	var setUserLastName = removeUserLastName ? null : $formValues.find('.setUserLastName').val();
	var addUserLastName = $formValues.find('.addUserLastName').val();
	if(removeUserLastName || setUserLastName != null && setUserLastName !== '')
		vals['setUserLastName'] = setUserLastName;
	if(addUserLastName != null && addUserLastName !== '')
		vals['addUserLastName'] = addUserLastName;
	var removeUserLastName = $formValues.find('.removeUserLastName').val();
	if(removeUserLastName != null && removeUserLastName !== '')
		vals['removeUserLastName'] = removeUserLastName;

	var valueUserFullName = $formValues.find('.valueUserFullName').val();
	var removeUserFullName = $formValues.find('.removeUserFullName').val() === 'true';
	var setUserFullName = removeUserFullName ? null : $formValues.find('.setUserFullName').val();
	var addUserFullName = $formValues.find('.addUserFullName').val();
	if(removeUserFullName || setUserFullName != null && setUserFullName !== '')
		vals['setUserFullName'] = setUserFullName;
	if(addUserFullName != null && addUserFullName !== '')
		vals['addUserFullName'] = addUserFullName;
	var removeUserFullName = $formValues.find('.removeUserFullName').val();
	if(removeUserFullName != null && removeUserFullName !== '')
		vals['removeUserFullName'] = removeUserFullName;

	patchSiteUserVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSiteUserFilters($formFilters) {
	var filters = [];
	if($formFilters) {
		filters.push({ name: 'softCommit', value: 'true' });

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var $filterSeeArchivedCheckbox = $formFilters.find('input.valueSeeArchived[type = "checkbox"]');
		var $filterSeeArchivedSelect = $formFilters.find('select.valueSeeArchived');
		var filterSeeArchived = $filterSeeArchivedSelect.length ? $filterSeeArchivedSelect.val() : $filterSeeArchivedCheckbox.prop('checked');
		var filterSeeArchivedSelectVal = $formFilters.find('select.filterSeeArchived').val();
		var filterSeeArchived = null;
		if(filterSeeArchivedSelectVal !== '')
			filterSeeArchived = filterSeeArchivedSelectVal == 'true';
		if(filterSeeArchived != null && filterSeeArchived === true)
			filters.push({ name: 'fq', value: 'seeArchived:' + filterSeeArchived });

		var $filterSeeDeletedCheckbox = $formFilters.find('input.valueSeeDeleted[type = "checkbox"]');
		var $filterSeeDeletedSelect = $formFilters.find('select.valueSeeDeleted');
		var filterSeeDeleted = $filterSeeDeletedSelect.length ? $filterSeeDeletedSelect.val() : $filterSeeDeletedCheckbox.prop('checked');
		var filterSeeDeletedSelectVal = $formFilters.find('select.filterSeeDeleted').val();
		var filterSeeDeleted = null;
		if(filterSeeDeletedSelectVal !== '')
			filterSeeDeleted = filterSeeDeletedSelectVal == 'true';
		if(filterSeeDeleted != null && filterSeeDeleted === true)
			filters.push({ name: 'fq', value: 'seeDeleted:' + filterSeeDeleted });

		var filterNarrativeKeys = $formFilters.find('.valueNarrativeKeys').val();
		if(filterNarrativeKeys != null && filterNarrativeKeys !== '')
			filters.push({ name: 'fq', value: 'narrativeKeys:' + filterNarrativeKeys });

		var filterEventKeys = $formFilters.find('.valueEventKeys').val();
		if(filterEventKeys != null && filterEventKeys !== '')
			filters.push({ name: 'fq', value: 'eventKeys:' + filterEventKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserName = $formFilters.find('.valueUserName').val();
		if(filterUserName != null && filterUserName !== '')
			filters.push({ name: 'fq', value: 'userName:' + filterUserName });

		var filterUserEmail = $formFilters.find('.valueUserEmail').val();
		if(filterUserEmail != null && filterUserEmail !== '')
			filters.push({ name: 'fq', value: 'userEmail:' + filterUserEmail });

		var filterUserFirstName = $formFilters.find('.valueUserFirstName').val();
		if(filterUserFirstName != null && filterUserFirstName !== '')
			filters.push({ name: 'fq', value: 'userFirstName:' + filterUserFirstName });

		var filterUserLastName = $formFilters.find('.valueUserLastName').val();
		if(filterUserLastName != null && filterUserLastName !== '')
			filters.push({ name: 'fq', value: 'userLastName:' + filterUserLastName });

		var filterUserFullName = $formFilters.find('.valueUserFullName').val();
		if(filterUserFullName != null && filterUserFullName !== '')
			filters.push({ name: 'fq', value: 'userFullName:' + filterUserFullName });
	}
	return filters;
}

function patchSiteUserVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSiteUserVals(filters, vals, success, error);
}

function patchSiteUserVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/user?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// POST //

async function postSiteUser($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived == 'true';

	var valueDeleted = $formValues.find('.valueDeleted').val();
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted == 'true';

	var valueSeeArchived = $formValues.find('.valueSeeArchived').val();
	if(valueSeeArchived != null && valueSeeArchived !== '')
		vals['seeArchived'] = valueSeeArchived == 'true';

	var valueSeeDeleted = $formValues.find('.valueSeeDeleted').val();
	if(valueSeeDeleted != null && valueSeeDeleted !== '')
		vals['seeDeleted'] = valueSeeDeleted == 'true';

	var valueNarrativeKeys = [];
	$formValues.find('input.valueNarrativeKeys:checked').each(function(index) {
		valueNarrativeKeys.push($(this).val());
	});
	if(valueNarrativeKeys.length > 0)
		vals['narrativeKeys'] = valueNarrativeKeys;

	var valueEventKeys = [];
	$formValues.find('input.valueEventKeys:checked').each(function(index) {
		valueEventKeys.push($(this).val());
	});
	if(valueEventKeys.length > 0)
		vals['eventKeys'] = valueEventKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserName = $formValues.find('.valueUserName').val();
	if(valueUserName != null && valueUserName !== '')
		vals['userName'] = valueUserName;

	var valueUserEmail = $formValues.find('.valueUserEmail').val();
	if(valueUserEmail != null && valueUserEmail !== '')
		vals['userEmail'] = valueUserEmail;

	var valueUserFirstName = $formValues.find('.valueUserFirstName').val();
	if(valueUserFirstName != null && valueUserFirstName !== '')
		vals['userFirstName'] = valueUserFirstName;

	var valueUserLastName = $formValues.find('.valueUserLastName').val();
	if(valueUserLastName != null && valueUserLastName !== '')
		vals['userLastName'] = valueUserLastName;

	var valueUserFullName = $formValues.find('.valueUserFullName').val();
	if(valueUserFullName != null && valueUserFullName !== '')
		vals['userFullName'] = valueUserFullName;

	$.ajax({
		url: '/api/user'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSiteUserVals(vals, success, error) {
	$.ajax({
		url: '/api/user'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSiteUser($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportSiteUserVals(JSON.parse(json), success, error);
}

function putimportSiteUserVals(json, success, error) {
	$.ajax({
		url: '/api/user-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

async function websocketSiteUser(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSiteUser', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SiteUserForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-gray ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-user-cog w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify site users in ' + json.timeRemaining);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-gray ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			if(numPATCH < numFound) {
				var $old_box = $('.box-' + id);
				if(!$old_box.size()) {
					$('.top-box').append($box);
				} else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
					$('.box-' + id).html($margin);
				}
			} else {
				$('.box-' + id).remove();
			}
			if(pk && pkPage && pk == pkPage) {
				if(success)
					success(json);
			}
		});

		window.eventBus.registerHandler('websocketReportNarrative', function (error, message) {
			$('#Page_narrativeKeys').trigger('oninput');
			$('#Page_narrativeKeys_add').text('add a report narrative');
			$('#Page_narrativeKeys_add').removeClass('w3-disabled');
			$('#Page_narrativeKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketReportEvent', function (error, message) {
			$('#Page_eventKeys').trigger('oninput');
			$('#Page_eventKeys_add').text('add a calendar item');
			$('#Page_eventKeys_add').removeClass('w3-disabled');
			$('#Page_eventKeys_add').attr('disabled', false);
		});
	}
}
async function websocketSiteUserInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSiteUserVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSiteUser' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSiteUser' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSiteUser' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSiteUser' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSiteUser' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSiteUser' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Deleted'));
			}
			var val = o['seeArchived'];
			if(vars.includes('seeArchived')) {
				$('.inputSiteUser' + pk + 'SeeArchived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'SeeArchived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'SeeArchived'));
			}
			var val = o['seeDeleted'];
			if(vars.includes('seeDeleted')) {
				$('.inputSiteUser' + pk + 'SeeDeleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'SeeDeleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'SeeDeleted'));
			}
			var val = o['narrativeKeys'];
			if(vars.includes('narrativeKeys')) {
				$('.inputSiteUser' + pk + 'NarrativeKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'NarrativeKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'NarrativeKeys'));
			}
			var val = o['eventKeys'];
			if(vars.includes('eventKeys')) {
				$('.inputSiteUser' + pk + 'EventKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'EventKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'EventKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSiteUser' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'InheritPk'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSiteUser' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSiteUser' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSiteUser' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSiteUser' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'SessionId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSiteUser' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSiteUser' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSiteUser' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSiteUser' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSiteUser' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSiteUser' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSiteUser' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSiteUser' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'PageUrlApi'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSiteUser' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'Id'));
			}
			var val = o['userKeys'];
			if(vars.includes('userKeys')) {
				$('.inputSiteUser' + pk + 'UserKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserKeys'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSiteUser' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserId'));
			}
			var val = o['userName'];
			if(vars.includes('userName')) {
				$('.inputSiteUser' + pk + 'UserName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserName'));
			}
			var val = o['userEmail'];
			if(vars.includes('userEmail')) {
				$('.inputSiteUser' + pk + 'UserEmail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserEmail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserEmail'));
			}
			var val = o['userFirstName'];
			if(vars.includes('userFirstName')) {
				$('.inputSiteUser' + pk + 'UserFirstName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserFirstName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserFirstName'));
			}
			var val = o['userLastName'];
			if(vars.includes('userLastName')) {
				$('.inputSiteUser' + pk + 'UserLastName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserLastName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserLastName'));
			}
			var val = o['userFullName'];
			if(vars.includes('userFullName')) {
				$('.inputSiteUser' + pk + 'UserFullName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteUser' + pk + 'UserFullName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteUser' + pk + 'UserFullName'));
			}
		});
	}
}

function pageGraph(apiRequest) {
	var json = JSON.parse($('.pageForm .pageResponse').val());
	if(json['facetCounts']) {
		var facetCounts = json.facetCounts;
		if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
			var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
			var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
			var rangeName;
			var rangeVar;
			var rangeVarFq;
			var rangeCounts;
			var rangeVals;
			if(range) {
				rangeName = range.name;
				rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
				rangeVarFq = window.varsFq[rangeVar];
				rangeCounts = range.counts;
				rangeVals = Object.keys(rangeCounts).map(key => key.substring(0, 10));
			}
			var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
			var pivot1VarIndexed = pivot1Name;
			if(pivot1VarIndexed.includes(','))
				pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
			var pivot1Var = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf('_'));
			var pivot1VarFq = window.varsFq[pivot1Var];
			var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
			var pivot1Vals = Object.keys(pivot1Map);
			var data = [];
			var layout = {};
			if(pivot1VarFq.classSimpleName === 'Point') {
				layout['dragmode'] = 'zoom';
				layout['mapbox'] = { style: 'open-street-map', center: { lat: 55.61888, lon: 13.548799 }, zoom: 11 };
				layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
				var trace = {};
				trace['type'] = 'scattermapbox';
				trace['marker'] = { color: 'fuchsia', size: 6 };
				var lat = [];
				var lon = [];
				var text = [];
				var customdata = [];
				trace['lat'] = lat;
				trace['lon'] = lon;
				trace['text'] = text;
				trace['customdata'] = customdata;
				json.response.docs.forEach((record) => {
					var location = record.fields[pivot1VarIndexed];
					if(location) {
						var locationParts = location.split(',');
						text.push('pivot1Val');
						lat.push(parseFloat(locationParts[0]));
						lon.push(parseFloat(locationParts[1]));
						var vals = {};
						var hovertemplate = '';
						Object.entries(window.varsFq).forEach(([key, data]) => {
							if(data.displayName) {
								vals[data.var] = record.fields[data.varStored];
								hovertemplate += '<b>' + data.displayName + ': %{customdata.' + data.var + '}</b><br>';
							}
							customdata.push(vals);
						});
						customdata.push(vals);
						trace['hovertemplate'] = hovertemplate;
					}
				});
				data.push(trace);
			} else if(range) {
				layout['title'] = 'SiteUser';
				layout['xaxis'] = {
					title: rangeVarFq.displayName
				}
				layout['yaxis'] = {
					title: pivot1VarFq.displayName
				}
				pivot1Vals.forEach((pivot1Val) => {
					var pivot1 = pivot1Map[pivot1Val];
					var pivot1Counts = pivot1.ranges[rangeName].counts;
					var trace = {};
					trace['x'] = Object.keys(pivot1Counts).map(key => key.substring(0, 10));
					trace['y'] = Object.values(pivot1Counts);
					trace['mode'] = 'lines+markers';
					trace['name'] = pivot1Val;
					data.push(trace);
				});
			}
			Plotly.newPlot('htmBodyGraphBaseModelPage', data, layout);
		}
	}
}
