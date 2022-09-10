
// PUTImport //

async function putimportReportSchedule($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportReportScheduleVals(JSON.parse(json), success, error);
}

function putimportReportScheduleVals(json, success, error) {
	$.ajax({
		url: '/api/report-schedule-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// POST //

async function postReportSchedule($formValues, success, error) {
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

	var valueTypeKey = $formValues.find('.valueTypeKey').val();
	if(valueTypeKey != null && valueTypeKey !== '')
		vals['typeKey'] = valueTypeKey;

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

	var valuePullOwnerKey = $formValues.find('.valuePullOwnerKey').val();
	if(valuePullOwnerKey != null && valuePullOwnerKey !== '')
		vals['pullOwnerKey'] = valuePullOwnerKey;

	var valueFinalOwnerKey = $formValues.find('.valueFinalOwnerKey').val();
	if(valueFinalOwnerKey != null && valueFinalOwnerKey !== '')
		vals['finalOwnerKey'] = valueFinalOwnerKey;

	var valueScheduleName = $formValues.find('.valueScheduleName').val();
	if(valueScheduleName != null && valueScheduleName !== '')
		vals['scheduleName'] = valueScheduleName;

	var valueFrequencyOneTime = $formValues.find('.valueFrequencyOneTime').val();
	if(valueFrequencyOneTime != null && valueFrequencyOneTime !== '')
		vals['frequencyOneTime'] = valueFrequencyOneTime == 'true';

	var valueFrequencyTimesPerYear = $formValues.find('.valueFrequencyTimesPerYear').val();
	if(valueFrequencyTimesPerYear != null && valueFrequencyTimesPerYear !== '')
		vals['frequencyTimesPerYear'] = valueFrequencyTimesPerYear;

	var valueFrequencyYearsAfterCompletion = $formValues.find('.valueFrequencyYearsAfterCompletion').val();
	if(valueFrequencyYearsAfterCompletion != null && valueFrequencyYearsAfterCompletion !== '')
		vals['frequencyYearsAfterCompletion'] = valueFrequencyYearsAfterCompletion;

	var valueFirstDueDate = $formValues.find('.valueFirstDueDate').val();
	if(valueFirstDueDate != null && valueFirstDueDate !== '')
		vals['firstDueDate'] = valueFirstDueDate;

	var valueDataPeriodStartDate = $formValues.find('.valueDataPeriodStartDate').val();
	if(valueDataPeriodStartDate != null && valueDataPeriodStartDate !== '')
		vals['dataPeriodStartDate'] = valueDataPeriodStartDate;

	var valueDataPullEndDate = $formValues.find('.valueDataPullEndDate').val();
	if(valueDataPullEndDate != null && valueDataPullEndDate !== '')
		vals['dataPullEndDate'] = valueDataPullEndDate;

	var valueDataPullDate = $formValues.find('.valueDataPullDate').val();
	if(valueDataPullDate != null && valueDataPullDate !== '')
		vals['dataPullDate'] = valueDataPullDate;

	var valueDataSources = $formValues.find('.valueDataSources').val();
	if(valueDataSources != null && valueDataSources !== '')
		vals['dataSources'] = valueDataSources;

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
		url: '/api/report-schedule'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postReportScheduleVals(vals, success, error) {
	$.ajax({
		url: '/api/report-schedule'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchReportSchedule($formFilters, $formValues, pk, success, error) {
	var filters = patchReportScheduleFilters($formFilters);

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

	var valueTypeKey = $formValues.find('input.valueTypeKey:checked').val();
	if(valueTypeKey != null && valueTypeKey !== '')
		vals['setTypeKey'] = valueTypeKey;

	var valueNarrativeKeys = $formValues.find('input.valueNarrativeKeys:checked').val();
	if(valueNarrativeKeys != null && valueNarrativeKeys !== '')
		vals['addNarrativeKeys'] = valueNarrativeKeys;

	var valueEventKeys = $formValues.find('input.valueEventKeys:checked').val();
	if(valueEventKeys != null && valueEventKeys !== '')
		vals['addEventKeys'] = valueEventKeys;

	var valuePullOwnerKey = $formValues.find('input.valuePullOwnerKey:checked').val();
	if(valuePullOwnerKey != null && valuePullOwnerKey !== '')
		vals['setPullOwnerKey'] = valuePullOwnerKey;

	var valueFinalOwnerKey = $formValues.find('input.valueFinalOwnerKey:checked').val();
	if(valueFinalOwnerKey != null && valueFinalOwnerKey !== '')
		vals['setFinalOwnerKey'] = valueFinalOwnerKey;

	var valueScheduleName = $formValues.find('.valueScheduleName').val();
	var removeScheduleName = $formValues.find('.removeScheduleName').val() === 'true';
	var setScheduleName = removeScheduleName ? null : $formValues.find('.setScheduleName').val();
	var addScheduleName = $formValues.find('.addScheduleName').val();
	if(removeScheduleName || setScheduleName != null && setScheduleName !== '')
		vals['setScheduleName'] = setScheduleName;
	if(addScheduleName != null && addScheduleName !== '')
		vals['addScheduleName'] = addScheduleName;
	var removeScheduleName = $formValues.find('.removeScheduleName').val();
	if(removeScheduleName != null && removeScheduleName !== '')
		vals['removeScheduleName'] = removeScheduleName;

	var valueFrequencyOneTime = $formValues.find('.valueFrequencyOneTime').val();
	var removeFrequencyOneTime = $formValues.find('.removeFrequencyOneTime').val() === 'true';
	var valueFrequencyOneTimeSelectVal = $formValues.find('select.setFrequencyOneTime').val();
	if(valueFrequencyOneTimeSelectVal != null && valueFrequencyOneTimeSelectVal !== '')
		valueFrequencyOneTime = valueFrequencyOneTimeSelectVal == 'true';
	var setFrequencyOneTime = removeFrequencyOneTime ? null : valueFrequencyOneTime;
	var addFrequencyOneTime = $formValues.find('.addFrequencyOneTime').prop('checked');
	if(removeFrequencyOneTime || setFrequencyOneTime != null && setFrequencyOneTime !== '')
		vals['setFrequencyOneTime'] = setFrequencyOneTime;
	if(addFrequencyOneTime != null && addFrequencyOneTime !== '')
		vals['addFrequencyOneTime'] = addFrequencyOneTime;
	var removeFrequencyOneTime = $formValues.find('.removeFrequencyOneTime').prop('checked');
	if(removeFrequencyOneTime != null && removeFrequencyOneTime !== '')
		vals['removeFrequencyOneTime'] = removeFrequencyOneTime;

	var valueFrequencyTimesPerYear = $formValues.find('.valueFrequencyTimesPerYear').val();
	var removeFrequencyTimesPerYear = $formValues.find('.removeFrequencyTimesPerYear').val() === 'true';
	var setFrequencyTimesPerYear = removeFrequencyTimesPerYear ? null : $formValues.find('.setFrequencyTimesPerYear').val();
	var addFrequencyTimesPerYear = $formValues.find('.addFrequencyTimesPerYear').val();
	if(removeFrequencyTimesPerYear || setFrequencyTimesPerYear != null && setFrequencyTimesPerYear !== '')
		vals['setFrequencyTimesPerYear'] = setFrequencyTimesPerYear;
	if(addFrequencyTimesPerYear != null && addFrequencyTimesPerYear !== '')
		vals['addFrequencyTimesPerYear'] = addFrequencyTimesPerYear;
	var removeFrequencyTimesPerYear = $formValues.find('.removeFrequencyTimesPerYear').val();
	if(removeFrequencyTimesPerYear != null && removeFrequencyTimesPerYear !== '')
		vals['removeFrequencyTimesPerYear'] = removeFrequencyTimesPerYear;

	var valueFrequencyYearsAfterCompletion = $formValues.find('.valueFrequencyYearsAfterCompletion').val();
	var removeFrequencyYearsAfterCompletion = $formValues.find('.removeFrequencyYearsAfterCompletion').val() === 'true';
	var setFrequencyYearsAfterCompletion = removeFrequencyYearsAfterCompletion ? null : $formValues.find('.setFrequencyYearsAfterCompletion').val();
	var addFrequencyYearsAfterCompletion = $formValues.find('.addFrequencyYearsAfterCompletion').val();
	if(removeFrequencyYearsAfterCompletion || setFrequencyYearsAfterCompletion != null && setFrequencyYearsAfterCompletion !== '')
		vals['setFrequencyYearsAfterCompletion'] = setFrequencyYearsAfterCompletion;
	if(addFrequencyYearsAfterCompletion != null && addFrequencyYearsAfterCompletion !== '')
		vals['addFrequencyYearsAfterCompletion'] = addFrequencyYearsAfterCompletion;
	var removeFrequencyYearsAfterCompletion = $formValues.find('.removeFrequencyYearsAfterCompletion').val();
	if(removeFrequencyYearsAfterCompletion != null && removeFrequencyYearsAfterCompletion !== '')
		vals['removeFrequencyYearsAfterCompletion'] = removeFrequencyYearsAfterCompletion;

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

	var valueDataPeriodStartDate = $formValues.find('.valueDataPeriodStartDate').val();
	var removeDataPeriodStartDate = $formValues.find('.removeDataPeriodStartDate').val() === 'true';
	var setDataPeriodStartDate = removeDataPeriodStartDate ? null : $formValues.find('.setDataPeriodStartDate').val();
	var addDataPeriodStartDate = $formValues.find('.addDataPeriodStartDate').val();
	var setMoment = setDataPeriodStartDate ? moment(setDataPeriodStartDate, 'MM/DD/YYYY') : null; 
	var addMoment = addDataPeriodStartDate ? moment(addDataPeriodStartDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setDataPeriodStartDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addDataPeriodStartDate = s;
	} 
	if(removeDataPeriodStartDate || setDataPeriodStartDate != null && setDataPeriodStartDate !== '')
		vals['setDataPeriodStartDate'] = setDataPeriodStartDate;
	if(addDataPeriodStartDate != null && addDataPeriodStartDate !== '')
		vals['addDataPeriodStartDate'] = addDataPeriodStartDate;
	var removeDataPeriodStartDate = $formValues.find('.removeDataPeriodStartDate').val();
	if(removeDataPeriodStartDate != null && removeDataPeriodStartDate !== '')
		vals['removeDataPeriodStartDate'] = removeDataPeriodStartDate;

	var valueDataPullEndDate = $formValues.find('.valueDataPullEndDate').val();
	var removeDataPullEndDate = $formValues.find('.removeDataPullEndDate').val() === 'true';
	var setDataPullEndDate = removeDataPullEndDate ? null : $formValues.find('.setDataPullEndDate').val();
	var addDataPullEndDate = $formValues.find('.addDataPullEndDate').val();
	var setMoment = setDataPullEndDate ? moment(setDataPullEndDate, 'MM/DD/YYYY') : null; 
	var addMoment = addDataPullEndDate ? moment(addDataPullEndDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setDataPullEndDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addDataPullEndDate = s;
	} 
	if(removeDataPullEndDate || setDataPullEndDate != null && setDataPullEndDate !== '')
		vals['setDataPullEndDate'] = setDataPullEndDate;
	if(addDataPullEndDate != null && addDataPullEndDate !== '')
		vals['addDataPullEndDate'] = addDataPullEndDate;
	var removeDataPullEndDate = $formValues.find('.removeDataPullEndDate').val();
	if(removeDataPullEndDate != null && removeDataPullEndDate !== '')
		vals['removeDataPullEndDate'] = removeDataPullEndDate;

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

	var valueDataSources = $formValues.find('.valueDataSources').val();
	var removeDataSources = $formValues.find('.removeDataSources').val() === 'true';
	var setDataSources = removeDataSources ? null : $formValues.find('.setDataSources').val();
	var addDataSources = $formValues.find('.addDataSources').val();
	if(removeDataSources || setDataSources != null && setDataSources !== '')
		vals['setDataSources'] = setDataSources;
	if(addDataSources != null && addDataSources !== '')
		vals['addDataSources'] = addDataSources;
	var removeDataSources = $formValues.find('.removeDataSources').val();
	if(removeDataSources != null && removeDataSources !== '')
		vals['removeDataSources'] = removeDataSources;

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

	patchReportScheduleVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchReportScheduleFilters($formFilters) {
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

		var filterTypeKey = $formFilters.find('.valueTypeKey').val();
		if(filterTypeKey != null && filterTypeKey !== '')
			filters.push({ name: 'fq', value: 'typeKey:' + filterTypeKey });

		var filterNarrativeKeys = $formFilters.find('.valueNarrativeKeys').val();
		if(filterNarrativeKeys != null && filterNarrativeKeys !== '')
			filters.push({ name: 'fq', value: 'narrativeKeys:' + filterNarrativeKeys });

		var filterEventKeys = $formFilters.find('.valueEventKeys').val();
		if(filterEventKeys != null && filterEventKeys !== '')
			filters.push({ name: 'fq', value: 'eventKeys:' + filterEventKeys });

		var filterPullOwnerKey = $formFilters.find('.valuePullOwnerKey').val();
		if(filterPullOwnerKey != null && filterPullOwnerKey !== '')
			filters.push({ name: 'fq', value: 'pullOwnerKey:' + filterPullOwnerKey });

		var filterFinalOwnerKey = $formFilters.find('.valueFinalOwnerKey').val();
		if(filterFinalOwnerKey != null && filterFinalOwnerKey !== '')
			filters.push({ name: 'fq', value: 'finalOwnerKey:' + filterFinalOwnerKey });

		var filterScheduleName = $formFilters.find('.valueScheduleName').val();
		if(filterScheduleName != null && filterScheduleName !== '')
			filters.push({ name: 'fq', value: 'scheduleName:' + filterScheduleName });

		var $filterFrequencyOneTimeCheckbox = $formFilters.find('input.valueFrequencyOneTime[type = "checkbox"]');
		var $filterFrequencyOneTimeSelect = $formFilters.find('select.valueFrequencyOneTime');
		var filterFrequencyOneTime = $filterFrequencyOneTimeSelect.length ? $filterFrequencyOneTimeSelect.val() : $filterFrequencyOneTimeCheckbox.prop('checked');
		var filterFrequencyOneTimeSelectVal = $formFilters.find('select.filterFrequencyOneTime').val();
		var filterFrequencyOneTime = null;
		if(filterFrequencyOneTimeSelectVal !== '')
			filterFrequencyOneTime = filterFrequencyOneTimeSelectVal == 'true';
		if(filterFrequencyOneTime != null && filterFrequencyOneTime === true)
			filters.push({ name: 'fq', value: 'frequencyOneTime:' + filterFrequencyOneTime });

		var filterFrequencyTimesPerYear = $formFilters.find('.valueFrequencyTimesPerYear').val();
		if(filterFrequencyTimesPerYear != null && filterFrequencyTimesPerYear !== '')
			filters.push({ name: 'fq', value: 'frequencyTimesPerYear:' + filterFrequencyTimesPerYear });

		var filterFrequencyYearsAfterCompletion = $formFilters.find('.valueFrequencyYearsAfterCompletion').val();
		if(filterFrequencyYearsAfterCompletion != null && filterFrequencyYearsAfterCompletion !== '')
			filters.push({ name: 'fq', value: 'frequencyYearsAfterCompletion:' + filterFrequencyYearsAfterCompletion });

		var filterFirstDueDate = $formFilters.find('.valueFirstDueDate').val();
		if(filterFirstDueDate != null && filterFirstDueDate !== '')
			filters.push({ name: 'fq', value: 'firstDueDate:' + filterFirstDueDate });

		var filterDataPeriodStartDate = $formFilters.find('.valueDataPeriodStartDate').val();
		if(filterDataPeriodStartDate != null && filterDataPeriodStartDate !== '')
			filters.push({ name: 'fq', value: 'dataPeriodStartDate:' + filterDataPeriodStartDate });

		var filterDataPullEndDate = $formFilters.find('.valueDataPullEndDate').val();
		if(filterDataPullEndDate != null && filterDataPullEndDate !== '')
			filters.push({ name: 'fq', value: 'dataPullEndDate:' + filterDataPullEndDate });

		var filterDataPullDate = $formFilters.find('.valueDataPullDate').val();
		if(filterDataPullDate != null && filterDataPullDate !== '')
			filters.push({ name: 'fq', value: 'dataPullDate:' + filterDataPullDate });

		var filterDataSources = $formFilters.find('.valueDataSources').val();
		if(filterDataSources != null && filterDataSources !== '')
			filters.push({ name: 'fq', value: 'dataSources:' + filterDataSources });

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

		var filterTypeName = $formFilters.find('.valueTypeName').val();
		if(filterTypeName != null && filterTypeName !== '')
			filters.push({ name: 'fq', value: 'typeName:' + filterTypeName });

		var filterPullOwnerName = $formFilters.find('.valuePullOwnerName').val();
		if(filterPullOwnerName != null && filterPullOwnerName !== '')
			filters.push({ name: 'fq', value: 'pullOwnerName:' + filterPullOwnerName });

		var filterFinalOwnerName = $formFilters.find('.valueFinalOwnerName').val();
		if(filterFinalOwnerName != null && filterFinalOwnerName !== '')
			filters.push({ name: 'fq', value: 'finalOwnerName:' + filterFinalOwnerName });
	}
	return filters;
}

function patchReportScheduleVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchReportScheduleVals(filters, vals, success, error);
}

function patchReportScheduleVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/report-schedule?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getReportSchedule(pk) {
	$.ajax({
		url: '/api/report-schedule/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchReportSchedule($formFilters, success, error) {
	var filters = searchReportScheduleFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchReportScheduleVals(filters, success, error);
}

function searchReportScheduleFilters($formFilters) {
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

		var filterTypeKey = $formFilters.find('.valueTypeKey').val();
		if(filterTypeKey != null && filterTypeKey !== '')
			filters.push({ name: 'fq', value: 'typeKey:' + filterTypeKey });

		var filterNarrativeKeys = $formFilters.find('.valueNarrativeKeys').val();
		if(filterNarrativeKeys != null && filterNarrativeKeys !== '')
			filters.push({ name: 'fq', value: 'narrativeKeys:' + filterNarrativeKeys });

		var filterEventKeys = $formFilters.find('.valueEventKeys').val();
		if(filterEventKeys != null && filterEventKeys !== '')
			filters.push({ name: 'fq', value: 'eventKeys:' + filterEventKeys });

		var filterPullOwnerKey = $formFilters.find('.valuePullOwnerKey').val();
		if(filterPullOwnerKey != null && filterPullOwnerKey !== '')
			filters.push({ name: 'fq', value: 'pullOwnerKey:' + filterPullOwnerKey });

		var filterFinalOwnerKey = $formFilters.find('.valueFinalOwnerKey').val();
		if(filterFinalOwnerKey != null && filterFinalOwnerKey !== '')
			filters.push({ name: 'fq', value: 'finalOwnerKey:' + filterFinalOwnerKey });

		var filterScheduleName = $formFilters.find('.valueScheduleName').val();
		if(filterScheduleName != null && filterScheduleName !== '')
			filters.push({ name: 'fq', value: 'scheduleName:' + filterScheduleName });

		var $filterFrequencyOneTimeCheckbox = $formFilters.find('input.valueFrequencyOneTime[type = "checkbox"]');
		var $filterFrequencyOneTimeSelect = $formFilters.find('select.valueFrequencyOneTime');
		var filterFrequencyOneTime = $filterFrequencyOneTimeSelect.length ? $filterFrequencyOneTimeSelect.val() : $filterFrequencyOneTimeCheckbox.prop('checked');
		var filterFrequencyOneTimeSelectVal = $formFilters.find('select.filterFrequencyOneTime').val();
		var filterFrequencyOneTime = null;
		if(filterFrequencyOneTimeSelectVal !== '')
			filterFrequencyOneTime = filterFrequencyOneTimeSelectVal == 'true';
		if(filterFrequencyOneTime != null && filterFrequencyOneTime === true)
			filters.push({ name: 'fq', value: 'frequencyOneTime:' + filterFrequencyOneTime });

		var filterFrequencyTimesPerYear = $formFilters.find('.valueFrequencyTimesPerYear').val();
		if(filterFrequencyTimesPerYear != null && filterFrequencyTimesPerYear !== '')
			filters.push({ name: 'fq', value: 'frequencyTimesPerYear:' + filterFrequencyTimesPerYear });

		var filterFrequencyYearsAfterCompletion = $formFilters.find('.valueFrequencyYearsAfterCompletion').val();
		if(filterFrequencyYearsAfterCompletion != null && filterFrequencyYearsAfterCompletion !== '')
			filters.push({ name: 'fq', value: 'frequencyYearsAfterCompletion:' + filterFrequencyYearsAfterCompletion });

		var filterFirstDueDate = $formFilters.find('.valueFirstDueDate').val();
		if(filterFirstDueDate != null && filterFirstDueDate !== '')
			filters.push({ name: 'fq', value: 'firstDueDate:' + filterFirstDueDate });

		var filterDataPeriodStartDate = $formFilters.find('.valueDataPeriodStartDate').val();
		if(filterDataPeriodStartDate != null && filterDataPeriodStartDate !== '')
			filters.push({ name: 'fq', value: 'dataPeriodStartDate:' + filterDataPeriodStartDate });

		var filterDataPullEndDate = $formFilters.find('.valueDataPullEndDate').val();
		if(filterDataPullEndDate != null && filterDataPullEndDate !== '')
			filters.push({ name: 'fq', value: 'dataPullEndDate:' + filterDataPullEndDate });

		var filterDataPullDate = $formFilters.find('.valueDataPullDate').val();
		if(filterDataPullDate != null && filterDataPullDate !== '')
			filters.push({ name: 'fq', value: 'dataPullDate:' + filterDataPullDate });

		var filterDataSources = $formFilters.find('.valueDataSources').val();
		if(filterDataSources != null && filterDataSources !== '')
			filters.push({ name: 'fq', value: 'dataSources:' + filterDataSources });

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

		var filterTypeName = $formFilters.find('.valueTypeName').val();
		if(filterTypeName != null && filterTypeName !== '')
			filters.push({ name: 'fq', value: 'typeName:' + filterTypeName });

		var filterPullOwnerName = $formFilters.find('.valuePullOwnerName').val();
		if(filterPullOwnerName != null && filterPullOwnerName !== '')
			filters.push({ name: 'fq', value: 'pullOwnerName:' + filterPullOwnerName });

		var filterFinalOwnerName = $formFilters.find('.valueFinalOwnerName').val();
		if(filterFinalOwnerName != null && filterFinalOwnerName !== '')
			filters.push({ name: 'fq', value: 'finalOwnerName:' + filterFinalOwnerName });
	}
	return filters;
}

function searchReportScheduleVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'objectId asc' });
	$.ajax({
		url: '/api/report-schedule?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestReportScheduleObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-calendar-days ');
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
	searchReportScheduleVals($formFilters, success, error);
}

function suggestReportScheduleTypeKey(filters, $list, pk = null, relate=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-list-dropdown ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['scheduleKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_typeKey_' + pk + '_scheduleKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueTypeKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_typeKey_" + pk + "_scheduleKeys_" + o['pk'] + "'); patchReportScheduleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'TypeKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#ReportScheduleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchReportTypeVals(filters, success, error);
}

function suggestReportScheduleNarrativeKeys(filters, $list, pk = null, relate=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-pen ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['scheduleKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_narrativeKeys_' + pk + '_scheduleKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueNarrativeKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_narrativeKeys_" + pk + "_scheduleKey_" + o['pk'] + "'); patchReportScheduleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'NarrativeKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#ReportScheduleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchReportNarrativeVals(filters, success, error);
}

function suggestReportScheduleEventKeys(filters, $list, pk = null, relate=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-star ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['scheduleKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_eventKeys_' + pk + '_scheduleKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEventKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_eventKeys_" + pk + "_scheduleKey_" + o['pk'] + "'); patchReportScheduleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EventKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#ReportScheduleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchReportEventVals(filters, success, error);
}

function suggestReportSchedulePullOwnerKey(filters, $list, pk = null, relate=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['pullOwnerReportScheduleKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_pullOwnerKey_' + pk + '_pullOwnerReportScheduleKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePullOwnerKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_pullOwnerKey_" + pk + "_pullOwnerReportScheduleKeys_" + o['pk'] + "'); patchReportScheduleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'PullOwnerKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#ReportScheduleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteUserVals(filters, success, error);
}

function suggestReportScheduleFinalOwnerKey(filters, $list, pk = null, relate=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['finalOwnerReportScheduleKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_finalOwnerKey_' + pk + '_finalOwnerReportScheduleKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueFinalOwnerKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_finalOwnerKey_" + pk + "_finalOwnerReportScheduleKeys_" + o['pk'] + "'); patchReportScheduleVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'FinalOwnerKey']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#ReportScheduleForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteUserVals(filters, success, error);
}

async function websocketReportSchedule(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketReportSchedule', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#ReportScheduleForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-light-green ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-calendar-days w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify report schedules in ' + json.timeRemaining);
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

		window.eventBus.registerHandler('websocketReportType', function (error, message) {
			$('#Page_typeKey').trigger('oninput');
			$('#Page_typeKey_add').text('add a report type');
			$('#Page_typeKey_add').removeClass('w3-disabled');
			$('#Page_typeKey_add').attr('disabled', false);
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

		window.eventBus.registerHandler('websocketSiteUser', function (error, message) {
			$('#Page_pullOwnerKey').trigger('oninput');
			$('#Page_pullOwnerKey_add').text('add a site user');
			$('#Page_pullOwnerKey_add').removeClass('w3-disabled');
			$('#Page_pullOwnerKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSiteUser', function (error, message) {
			$('#Page_finalOwnerKey').trigger('oninput');
			$('#Page_finalOwnerKey_add').text('add a site user');
			$('#Page_finalOwnerKey_add').removeClass('w3-disabled');
			$('#Page_finalOwnerKey_add').attr('disabled', false);
		});
	}
}
async function websocketReportScheduleInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchReportScheduleVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputReportSchedule' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputReportSchedule' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputReportSchedule' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputReportSchedule' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputReportSchedule' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputReportSchedule' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'Deleted'));
			}
			var val = o['typeKey'];
			if(vars.includes('typeKey')) {
				$('.inputReportSchedule' + pk + 'TypeKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'TypeKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'TypeKey'));
			}
			var val = o['narrativeKeys'];
			if(vars.includes('narrativeKeys')) {
				$('.inputReportSchedule' + pk + 'NarrativeKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'NarrativeKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'NarrativeKeys'));
			}
			var val = o['eventKeys'];
			if(vars.includes('eventKeys')) {
				$('.inputReportSchedule' + pk + 'EventKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'EventKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'EventKeys'));
			}
			var val = o['pullOwnerKey'];
			if(vars.includes('pullOwnerKey')) {
				$('.inputReportSchedule' + pk + 'PullOwnerKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'PullOwnerKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'PullOwnerKey'));
			}
			var val = o['finalOwnerKey'];
			if(vars.includes('finalOwnerKey')) {
				$('.inputReportSchedule' + pk + 'FinalOwnerKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'FinalOwnerKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'FinalOwnerKey'));
			}
			var val = o['scheduleName'];
			if(vars.includes('scheduleName')) {
				$('.inputReportSchedule' + pk + 'ScheduleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'ScheduleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'ScheduleName'));
			}
			var val = o['frequencyOneTime'];
			if(vars.includes('frequencyOneTime')) {
				$('.inputReportSchedule' + pk + 'FrequencyOneTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'FrequencyOneTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'FrequencyOneTime'));
			}
			var val = o['frequencyTimesPerYear'];
			if(vars.includes('frequencyTimesPerYear')) {
				$('.inputReportSchedule' + pk + 'FrequencyTimesPerYear').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'FrequencyTimesPerYear').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'FrequencyTimesPerYear'));
			}
			var val = o['frequencyYearsAfterCompletion'];
			if(vars.includes('frequencyYearsAfterCompletion')) {
				$('.inputReportSchedule' + pk + 'FrequencyYearsAfterCompletion').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'FrequencyYearsAfterCompletion').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'FrequencyYearsAfterCompletion'));
			}
			var val = o['firstDueDate'];
			if(vars.includes('firstDueDate')) {
				$('.inputReportSchedule' + pk + 'FirstDueDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'FirstDueDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'FirstDueDate'));
			}
			var val = o['dataPeriodStartDate'];
			if(vars.includes('dataPeriodStartDate')) {
				$('.inputReportSchedule' + pk + 'DataPeriodStartDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'DataPeriodStartDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'DataPeriodStartDate'));
			}
			var val = o['dataPullEndDate'];
			if(vars.includes('dataPullEndDate')) {
				$('.inputReportSchedule' + pk + 'DataPullEndDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'DataPullEndDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'DataPullEndDate'));
			}
			var val = o['dataPullDate'];
			if(vars.includes('dataPullDate')) {
				$('.inputReportSchedule' + pk + 'DataPullDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'DataPullDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'DataPullDate'));
			}
			var val = o['dataSources'];
			if(vars.includes('dataSources')) {
				$('.inputReportSchedule' + pk + 'DataSources').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'DataSources').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'DataSources'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputReportSchedule' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'InheritPk'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputReportSchedule' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputReportSchedule' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputReportSchedule' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputReportSchedule' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'SessionId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputReportSchedule' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputReportSchedule' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputReportSchedule' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputReportSchedule' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputReportSchedule' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputReportSchedule' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputReportSchedule' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputReportSchedule' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'PageUrlApi'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputReportSchedule' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'Id'));
			}
			var val = o['typeName'];
			if(vars.includes('typeName')) {
				$('.inputReportSchedule' + pk + 'TypeName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'TypeName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'TypeName'));
			}
			var val = o['pullOwnerName'];
			if(vars.includes('pullOwnerName')) {
				$('.inputReportSchedule' + pk + 'PullOwnerName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'PullOwnerName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'PullOwnerName'));
			}
			var val = o['finalOwnerName'];
			if(vars.includes('finalOwnerName')) {
				$('.inputReportSchedule' + pk + 'FinalOwnerName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varReportSchedule' + pk + 'FinalOwnerName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputReportSchedule' + pk + 'FinalOwnerName'));
			}
		});
	}
}

function pageGraph(apiRequest) {
	var r = $('.pageForm .pageResponse').val();
	if(r) {
	var json = JSON.parse(r);
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
					rangeVals = Object.keys(rangeCounts).map(key => key);
				}
				var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
				var pivot1VarIndexed = pivot1Name;
				if(pivot1VarIndexed.includes(','))
					pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
				var pivot1Var = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf('_'));
				var pivot1VarFq = window.varsFq[pivot1Var] ? window.varsFq[pivot1Var] : 'classSimpleName';
				var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
				var pivot1Vals = Object.keys(pivot1Map);
				var data = [];
				var layout = {};
				if(pivot1VarFq.classSimpleName === 'Point') {
					layout['showlegend'] = true;
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
					trace['showlegend'] = true;
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
					layout['title'] = 'ReportSchedule';
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
						trace['showlegend'] = true;
						trace['x'] = Object.keys(pivot1Counts).map(key => key);
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
