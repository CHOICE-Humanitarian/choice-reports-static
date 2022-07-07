
// PUTImport //

async function putimportReportNarrative($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportReportNarrativeVals(JSON.parse(json), success, error);
}

function putimportReportNarrativeVals(json, success, error) {
	$.ajax({
		url: '/api/report-narrative-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// POST //

async function postReportNarrative($formValues, success, error) {
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

	var valueScheduleKey = $formValues.find('.valueScheduleKey').val();
	if(valueScheduleKey != null && valueScheduleKey !== '')
		vals['scheduleKey'] = valueScheduleKey;

	var valueAssigneeKey = $formValues.find('.valueAssigneeKey').val();
	if(valueAssigneeKey != null && valueAssigneeKey !== '')
		vals['assigneeKey'] = valueAssigneeKey;

	var valueNarrativeName = $formValues.find('.valueNarrativeName').val();
	if(valueNarrativeName != null && valueNarrativeName !== '')
		vals['narrativeName'] = valueNarrativeName;

	var valueFirstDueDate = $formValues.find('.valueFirstDueDate').val();
	if(valueFirstDueDate != null && valueFirstDueDate !== '')
		vals['firstDueDate'] = valueFirstDueDate;

	var valueDataPullDate = $formValues.find('.valueDataPullDate').val();
	if(valueDataPullDate != null && valueDataPullDate !== '')
		vals['dataPullDate'] = valueDataPullDate;

	var valuePullStartDate = $formValues.find('.valuePullStartDate').val();
	if(valuePullStartDate != null && valuePullStartDate !== '')
		vals['pullStartDate'] = valuePullStartDate;

	var valuePullEndDate = $formValues.find('.valuePullEndDate').val();
	if(valuePullEndDate != null && valuePullEndDate !== '')
		vals['pullEndDate'] = valuePullEndDate;

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

	$.ajax({
		url: '/api/report-narrative'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postReportNarrativeVals(vals, success, error) {
	$.ajax({
		url: '/api/report-narrative'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchReportNarrative($formFilters, $formValues, pk, success, error) {
	var filters = patchReportNarrativeFilters($formFilters);

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

	var valueScheduleKey = $formValues.find('input.valueScheduleKey:checked').val();
	if(valueScheduleKey != null && valueScheduleKey !== '')
		vals['setScheduleKey'] = valueScheduleKey;

	var valueAssigneeKey = $formValues.find('input.valueAssigneeKey:checked').val();
	if(valueAssigneeKey != null && valueAssigneeKey !== '')
		vals['setAssigneeKey'] = valueAssigneeKey;

	var valueNarrativeName = $formValues.find('.valueNarrativeName').val();
	var removeNarrativeName = $formValues.find('.removeNarrativeName').val() === 'true';
	var setNarrativeName = removeNarrativeName ? null : $formValues.find('.setNarrativeName').val();
	var addNarrativeName = $formValues.find('.addNarrativeName').val();
	if(removeNarrativeName || setNarrativeName != null && setNarrativeName !== '')
		vals['setNarrativeName'] = setNarrativeName;
	if(addNarrativeName != null && addNarrativeName !== '')
		vals['addNarrativeName'] = addNarrativeName;
	var removeNarrativeName = $formValues.find('.removeNarrativeName').val();
	if(removeNarrativeName != null && removeNarrativeName !== '')
		vals['removeNarrativeName'] = removeNarrativeName;

	var valueFirstDueDate = $formValues.find('.valueFirstDueDate').val();
	var removeFirstDueDate = $formValues.find('.removeFirstDueDate').val() === 'true';
	var setFirstDueDate = removeFirstDueDate ? null : $formValues.find('.setFirstDueDate').val();
	var addFirstDueDate = $formValues.find('.addFirstDueDate').val();
	var setMoment = setFirstDueDate ? moment(setFirstDueDate, 'MM/DD/YYYY') : null; 
	var addMoment = addFirstDueDate ? moment(addFirstDueDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setFirstDueDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addFirstDueDate = s;
	} 
	if(removeFirstDueDate || setFirstDueDate != null && setFirstDueDate !== '')
		vals['setFirstDueDate'] = setFirstDueDate;
	if(addFirstDueDate != null && addFirstDueDate !== '')
		vals['addFirstDueDate'] = addFirstDueDate;
	var removeFirstDueDate = $formValues.find('.removeFirstDueDate').val();
	if(removeFirstDueDate != null && removeFirstDueDate !== '')
		vals['removeFirstDueDate'] = removeFirstDueDate;

	var valueDataPullDate = $formValues.find('.valueDataPullDate').val();
	var removeDataPullDate = $formValues.find('.removeDataPullDate').val() === 'true';
	var setDataPullDate = removeDataPullDate ? null : $formValues.find('.setDataPullDate').val();
	var addDataPullDate = $formValues.find('.addDataPullDate').val();
	var setMoment = setDataPullDate ? moment(setDataPullDate, 'MM/DD/YYYY') : null; 
	var addMoment = addDataPullDate ? moment(addDataPullDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setDataPullDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addDataPullDate = s;
	} 
	if(removeDataPullDate || setDataPullDate != null && setDataPullDate !== '')
		vals['setDataPullDate'] = setDataPullDate;
	if(addDataPullDate != null && addDataPullDate !== '')
		vals['addDataPullDate'] = addDataPullDate;
	var removeDataPullDate = $formValues.find('.removeDataPullDate').val();
	if(removeDataPullDate != null && removeDataPullDate !== '')
		vals['removeDataPullDate'] = removeDataPullDate;

	var valuePullStartDate = $formValues.find('.valuePullStartDate').val();
	var removePullStartDate = $formValues.find('.removePullStartDate').val() === 'true';
	var setPullStartDate = removePullStartDate ? null : $formValues.find('.setPullStartDate').val();
	var addPullStartDate = $formValues.find('.addPullStartDate').val();
	var setMoment = setPullStartDate ? moment(setPullStartDate, 'MM/DD/YYYY') : null; 
	var addMoment = addPullStartDate ? moment(addPullStartDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setPullStartDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addPullStartDate = s;
	} 
	if(removePullStartDate || setPullStartDate != null && setPullStartDate !== '')
		vals['setPullStartDate'] = setPullStartDate;
	if(addPullStartDate != null && addPullStartDate !== '')
		vals['addPullStartDate'] = addPullStartDate;
	var removePullStartDate = $formValues.find('.removePullStartDate').val();
	if(removePullStartDate != null && removePullStartDate !== '')
		vals['removePullStartDate'] = removePullStartDate;

	var valuePullEndDate = $formValues.find('.valuePullEndDate').val();
	var removePullEndDate = $formValues.find('.removePullEndDate').val() === 'true';
	var setPullEndDate = removePullEndDate ? null : $formValues.find('.setPullEndDate').val();
	var addPullEndDate = $formValues.find('.addPullEndDate').val();
	var setMoment = setPullEndDate ? moment(setPullEndDate, 'MM/DD/YYYY') : null; 
	var addMoment = addPullEndDate ? moment(addPullEndDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setPullEndDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addPullEndDate = s;
	} 
	if(removePullEndDate || setPullEndDate != null && setPullEndDate !== '')
		vals['setPullEndDate'] = setPullEndDate;
	if(addPullEndDate != null && addPullEndDate !== '')
		vals['addPullEndDate'] = addPullEndDate;
	var removePullEndDate = $formValues.find('.removePullEndDate').val();
	if(removePullEndDate != null && removePullEndDate !== '')
		vals['removePullEndDate'] = removePullEndDate;

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

	patchReportNarrativeVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchReportNarrativeFilters($formFilters) {
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

		var filterScheduleKey = $formFilters.find('.valueScheduleKey').val();
		if(filterScheduleKey != null && filterScheduleKey !== '')
			filters.push({ name: 'fq', value: 'scheduleKey:' + filterScheduleKey });

		var filterAssigneeKey = $formFilters.find('.valueAssigneeKey').val();
		if(filterAssigneeKey != null && filterAssigneeKey !== '')
			filters.push({ name: 'fq', value: 'assigneeKey:' + filterAssigneeKey });

		var filterNarrativeName = $formFilters.find('.valueNarrativeName').val();
		if(filterNarrativeName != null && filterNarrativeName !== '')
			filters.push({ name: 'fq', value: 'narrativeName:' + filterNarrativeName });

		var filterFirstDueDate = $formFilters.find('.valueFirstDueDate').val();
		if(filterFirstDueDate != null && filterFirstDueDate !== '')
			filters.push({ name: 'fq', value: 'firstDueDate:' + filterFirstDueDate });

		var filterDataPullDate = $formFilters.find('.valueDataPullDate').val();
		if(filterDataPullDate != null && filterDataPullDate !== '')
			filters.push({ name: 'fq', value: 'dataPullDate:' + filterDataPullDate });

		var filterPullStartDate = $formFilters.find('.valuePullStartDate').val();
		if(filterPullStartDate != null && filterPullStartDate !== '')
			filters.push({ name: 'fq', value: 'pullStartDate:' + filterPullStartDate });

		var filterPullEndDate = $formFilters.find('.valuePullEndDate').val();
		if(filterPullEndDate != null && filterPullEndDate !== '')
			filters.push({ name: 'fq', value: 'pullEndDate:' + filterPullEndDate });

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

		var filterAssigneeName = $formFilters.find('.valueAssigneeName').val();
		if(filterAssigneeName != null && filterAssigneeName !== '')
			filters.push({ name: 'fq', value: 'assigneeName:' + filterAssigneeName });
	}
	return filters;
}

function patchReportNarrativeVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchReportNarrativeVals(filters, vals, success, error);
}

function patchReportNarrativeVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/report-narrative?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getReportNarrative(pk) {
	$.ajax({
		url: '/api/report-narrative/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchReportNarrative($formFilters, success, error) {
	var filters = searchReportNarrativeFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchReportNarrativeVals(filters, success, error);
}

function searchReportNarrativeFilters($formFilters) {
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

		var filterScheduleKey = $formFilters.find('.valueScheduleKey').val();
		if(filterScheduleKey != null && filterScheduleKey !== '')
			filters.push({ name: 'fq', value: 'scheduleKey:' + filterScheduleKey });

		var filterAssigneeKey = $formFilters.find('.valueAssigneeKey').val();
		if(filterAssigneeKey != null && filterAssigneeKey !== '')
			filters.push({ name: 'fq', value: 'assigneeKey:' + filterAssigneeKey });

		var filterNarrativeName = $formFilters.find('.valueNarrativeName').val();
		if(filterNarrativeName != null && filterNarrativeName !== '')
			filters.push({ name: 'fq', value: 'narrativeName:' + filterNarrativeName });

		var filterFirstDueDate = $formFilters.find('.valueFirstDueDate').val();
		if(filterFirstDueDate != null && filterFirstDueDate !== '')
			filters.push({ name: 'fq', value: 'firstDueDate:' + filterFirstDueDate });

		var filterDataPullDate = $formFilters.find('.valueDataPullDate').val();
		if(filterDataPullDate != null && filterDataPullDate !== '')
			filters.push({ name: 'fq', value: 'dataPullDate:' + filterDataPullDate });

		var filterPullStartDate = $formFilters.find('.valuePullStartDate').val();
		if(filterPullStartDate != null && filterPullStartDate !== '')
			filters.push({ name: 'fq', value: 'pullStartDate:' + filterPullStartDate });

		var filterPullEndDate = $formFilters.find('.valuePullEndDate').val();
		if(filterPullEndDate != null && filterPullEndDate !== '')
			filters.push({ name: 'fq', value: 'pullEndDate:' + filterPullEndDate });

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

		var filterAssigneeName = $formFilters.find('.valueAssigneeName').val();
		if(filterAssigneeName != null && filterAssigneeName !== '')
			filters.push({ name: 'fq', value: 'assigneeName:' + filterAssigneeName });
	}
	return filters;
}

function searchReportNarrativeVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'objectId asc' });
	$.ajax({
		url: '/api/report-narrative?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestReportNarrativeObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-calendar-pen ');
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
	searchReportNarrativeVals($formFilters, success, error);
}

function suggestReportNarrativeScheduleKey(filters, $list, pk = null, relate=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-days ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['narrativeKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_scheduleKey_' + pk + '_narrativeKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueScheduleKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_scheduleKey_" + pk + "_narrativeKeys_" + o['pk'] + "'); patchReportNarrativeVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'ScheduleKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#ReportNarrativeForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchReportScheduleVals(filters, success, error);
}

function suggestReportNarrativeAssigneeKey(filters, $list, pk = null, relate=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['narrativeKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_assigneeKey_' + pk + '_narrativeKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueAssigneeKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_assigneeKey_" + pk + "_narrativeKeys_" + o['pk'] + "'); patchReportNarrativeVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'AssigneeKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#ReportNarrativeForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteUserVals(filters, success, error);
}

async function websocketReportNarrative(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketReportNarrative', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#ReportNarrativeForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-light-green ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-calendar-pen w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify report narratives in ' + json.timeRemaining);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-light-green ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketReportSchedule', function (error, message) {
			$('#Page_scheduleKey').trigger('oninput');
			$('#Page_scheduleKey_add').text('add a report schedule');
			$('#Page_scheduleKey_add').removeClass('w3-disabled');
			$('#Page_scheduleKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSiteUser', function (error, message) {
			$('#Page_assigneeKey').trigger('oninput');
			$('#Page_assigneeKey_add').text('add a site user');
			$('#Page_assigneeKey_add').removeClass('w3-disabled');
			$('#Page_assigneeKey_add').attr('disabled', false);
		});
	}
}
async function websocketReportNarrativeInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchReportNarrativeVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputReportNarrative' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputReportNarrative' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputReportNarrative' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputReportNarrative' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputReportNarrative' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputReportNarrative' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'Deleted'));
			}
			var val = o['scheduleKey'];
			if(vars.includes('scheduleKey')) {
				$('.inputReportNarrative' + pk + 'ScheduleKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'ScheduleKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'ScheduleKey'));
			}
			var val = o['assigneeKey'];
			if(vars.includes('assigneeKey')) {
				$('.inputReportNarrative' + pk + 'AssigneeKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'AssigneeKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'AssigneeKey'));
			}
			var val = o['narrativeName'];
			if(vars.includes('narrativeName')) {
				$('.inputReportNarrative' + pk + 'NarrativeName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'NarrativeName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'NarrativeName'));
			}
			var val = o['firstDueDate'];
			if(vars.includes('firstDueDate')) {
				$('.inputReportNarrative' + pk + 'FirstDueDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'FirstDueDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'FirstDueDate'));
			}
			var val = o['dataPullDate'];
			if(vars.includes('dataPullDate')) {
				$('.inputReportNarrative' + pk + 'DataPullDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'DataPullDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'DataPullDate'));
			}
			var val = o['pullStartDate'];
			if(vars.includes('pullStartDate')) {
				$('.inputReportNarrative' + pk + 'PullStartDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'PullStartDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'PullStartDate'));
			}
			var val = o['pullEndDate'];
			if(vars.includes('pullEndDate')) {
				$('.inputReportNarrative' + pk + 'PullEndDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'PullEndDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'PullEndDate'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputReportNarrative' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'InheritPk'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputReportNarrative' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputReportNarrative' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputReportNarrative' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputReportNarrative' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'SessionId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputReportNarrative' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputReportNarrative' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputReportNarrative' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputReportNarrative' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputReportNarrative' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputReportNarrative' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputReportNarrative' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputReportNarrative' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'PageUrlApi'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputReportNarrative' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'Id'));
			}
			var val = o['assigneeName'];
			if(vars.includes('assigneeName')) {
				$('.inputReportNarrative' + pk + 'AssigneeName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportNarrative' + pk + 'AssigneeName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportNarrative' + pk + 'AssigneeName'));
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
				layout['uirevision'] = 'true';
				if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
					layout['mapbox'] = { style: 'open-street-map', center: { lat: window['DEFAULT_MAP_LOCATION']['lat'], lon: window['DEFAULT_MAP_LOCATION']['lon'] }, zoom: window['DEFAULT_MAP_ZOOM'] };
				else if(window['DEFAULT_MAP_ZOOM'])
					layout['mapbox'] = { style: 'open-street-map', zoom: window['DEFAULT_MAP_ZOOM'] };
				else if(window['DEFAULT_MAP_LOCATION'])
					layout['mapbox'] = { style: 'open-street-map', center: { lat: window['DEFAULT_MAP_LOCATION']['lat'], lon: window['DEFAULT_MAP_LOCATION']['lon'] } };
				else
					layout['mapbox'] = { style: 'open-street-map' };
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
				layout['title'] = 'ReportNarrative';
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
			Plotly.react('htmBodyGraphBaseModelPage', data, layout);
		}
	}
}

function animateStats() {
	let speedRate = parseFloat($('#animateStatsSpeed').val()) * 1000;
	let xStep = parseFloat($('#animateStatsStep').val());
	let xMin = parseFloat($('#animateStatsMin').val());
	let xMax = parseFloat($('#animateStatsMax').val());
	let x = xMin;

	let animateInterval = window.setInterval(() => {
	x = x + xStep;
	if (x > xMax || x < 0) {
		clearInterval(animateInterval);
	}
	$('#fqVehicleStep_time').val(x);
	$('#fqVehicleStep_time').change();
	searchPage();
	}, speedRate);
}
