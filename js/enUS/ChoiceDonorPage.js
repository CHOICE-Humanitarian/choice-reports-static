
// PUTImport //

async function putimportChoiceDonor($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportChoiceDonorVals(JSON.parse(json), success, error);
}

function putimportChoiceDonorVals(json, success, error) {
	$.ajax({
		url: '/api/donor-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// POST //

async function postChoiceDonor($formValues, success, error) {
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

	var valueDonorFullName = $formValues.find('.valueDonorFullName').val();
	if(valueDonorFullName != null && valueDonorFullName !== '')
		vals['donorFullName'] = valueDonorFullName;

	var valueDonorParentName = $formValues.find('.valueDonorParentName').val();
	if(valueDonorParentName != null && valueDonorParentName !== '')
		vals['donorParentName'] = valueDonorParentName;

	var valueDonorId = $formValues.find('.valueDonorId').val();
	if(valueDonorId != null && valueDonorId !== '')
		vals['donorId'] = valueDonorId;

	var valueDonorAttributeId = $formValues.find('.valueDonorAttributeId').val();
	if(valueDonorAttributeId != null && valueDonorAttributeId !== '')
		vals['donorAttributeId'] = valueDonorAttributeId;

	var valueDonorInKind = $formValues.find('.valueDonorInKind').val();
	if(valueDonorInKind != null && valueDonorInKind !== '')
		vals['donorInKind'] = valueDonorInKind;

	var valueDonorTotal = $formValues.find('.valueDonorTotal').val();
	if(valueDonorTotal != null && valueDonorTotal !== '')
		vals['donorTotal'] = valueDonorTotal;

	var valueDonorYtd = $formValues.find('.valueDonorYtd').val();
	if(valueDonorYtd != null && valueDonorYtd !== '')
		vals['donorYtd'] = valueDonorYtd;

	var valueDonorQ1 = $formValues.find('.valueDonorQ1').val();
	if(valueDonorQ1 != null && valueDonorQ1 !== '')
		vals['donorQ1'] = valueDonorQ1;

	var valueDonorQ2 = $formValues.find('.valueDonorQ2').val();
	if(valueDonorQ2 != null && valueDonorQ2 !== '')
		vals['donorQ2'] = valueDonorQ2;

	var valueDonorQ3 = $formValues.find('.valueDonorQ3').val();
	if(valueDonorQ3 != null && valueDonorQ3 !== '')
		vals['donorQ3'] = valueDonorQ3;

	var valueDonorQ4 = $formValues.find('.valueDonorQ4').val();
	if(valueDonorQ4 != null && valueDonorQ4 !== '')
		vals['donorQ4'] = valueDonorQ4;

	var valueDonorLogoFilename = $formValues.find('.valueDonorLogoFilename').val();
	if(valueDonorLogoFilename != null && valueDonorLogoFilename !== '')
		vals['donorLogoFilename'] = valueDonorLogoFilename;

	var valueReportKeys = [];
	$formValues.find('input.valueReportKeys:checked').each(function(index) {
		valueReportKeys.push($(this).val());
	});
	if(valueReportKeys.length > 0)
		vals['reportKeys'] = valueReportKeys;

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
		url: '/api/donor'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postChoiceDonorVals(vals, success, error) {
	$.ajax({
		url: '/api/donor'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchChoiceDonor($formFilters, $formValues, pk, success, error) {
	var filters = patchChoiceDonorFilters($formFilters);

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

	var valueDonorFullName = $formValues.find('.valueDonorFullName').val();
	var removeDonorFullName = $formValues.find('.removeDonorFullName').val() === 'true';
	var setDonorFullName = removeDonorFullName ? null : $formValues.find('.setDonorFullName').val();
	var addDonorFullName = $formValues.find('.addDonorFullName').val();
	if(removeDonorFullName || setDonorFullName != null && setDonorFullName !== '')
		vals['setDonorFullName'] = setDonorFullName;
	if(addDonorFullName != null && addDonorFullName !== '')
		vals['addDonorFullName'] = addDonorFullName;
	var removeDonorFullName = $formValues.find('.removeDonorFullName').val();
	if(removeDonorFullName != null && removeDonorFullName !== '')
		vals['removeDonorFullName'] = removeDonorFullName;

	var valueDonorParentName = $formValues.find('.valueDonorParentName').val();
	var removeDonorParentName = $formValues.find('.removeDonorParentName').val() === 'true';
	var setDonorParentName = removeDonorParentName ? null : $formValues.find('.setDonorParentName').val();
	var addDonorParentName = $formValues.find('.addDonorParentName').val();
	if(removeDonorParentName || setDonorParentName != null && setDonorParentName !== '')
		vals['setDonorParentName'] = setDonorParentName;
	if(addDonorParentName != null && addDonorParentName !== '')
		vals['addDonorParentName'] = addDonorParentName;
	var removeDonorParentName = $formValues.find('.removeDonorParentName').val();
	if(removeDonorParentName != null && removeDonorParentName !== '')
		vals['removeDonorParentName'] = removeDonorParentName;

	var valueDonorId = $formValues.find('.valueDonorId').val();
	var removeDonorId = $formValues.find('.removeDonorId').val() === 'true';
	var setDonorId = removeDonorId ? null : $formValues.find('.setDonorId').val();
	var addDonorId = $formValues.find('.addDonorId').val();
	if(removeDonorId || setDonorId != null && setDonorId !== '')
		vals['setDonorId'] = setDonorId;
	if(addDonorId != null && addDonorId !== '')
		vals['addDonorId'] = addDonorId;
	var removeDonorId = $formValues.find('.removeDonorId').val();
	if(removeDonorId != null && removeDonorId !== '')
		vals['removeDonorId'] = removeDonorId;

	var valueDonorAttributeId = $formValues.find('.valueDonorAttributeId').val();
	var removeDonorAttributeId = $formValues.find('.removeDonorAttributeId').val() === 'true';
	var setDonorAttributeId = removeDonorAttributeId ? null : $formValues.find('.setDonorAttributeId').val();
	var addDonorAttributeId = $formValues.find('.addDonorAttributeId').val();
	if(removeDonorAttributeId || setDonorAttributeId != null && setDonorAttributeId !== '')
		vals['setDonorAttributeId'] = setDonorAttributeId;
	if(addDonorAttributeId != null && addDonorAttributeId !== '')
		vals['addDonorAttributeId'] = addDonorAttributeId;
	var removeDonorAttributeId = $formValues.find('.removeDonorAttributeId').val();
	if(removeDonorAttributeId != null && removeDonorAttributeId !== '')
		vals['removeDonorAttributeId'] = removeDonorAttributeId;

	var valueDonorInKind = $formValues.find('.valueDonorInKind').val();
	var removeDonorInKind = $formValues.find('.removeDonorInKind').val() === 'true';
	var setDonorInKind = removeDonorInKind ? null : $formValues.find('.setDonorInKind').val();
	var addDonorInKind = $formValues.find('.addDonorInKind').val();
	if(removeDonorInKind || setDonorInKind != null && setDonorInKind !== '')
		vals['setDonorInKind'] = setDonorInKind;
	if(addDonorInKind != null && addDonorInKind !== '')
		vals['addDonorInKind'] = addDonorInKind;
	var removeDonorInKind = $formValues.find('.removeDonorInKind').val();
	if(removeDonorInKind != null && removeDonorInKind !== '')
		vals['removeDonorInKind'] = removeDonorInKind;

	var valueDonorTotal = $formValues.find('.valueDonorTotal').val();
	var removeDonorTotal = $formValues.find('.removeDonorTotal').val() === 'true';
	var setDonorTotal = removeDonorTotal ? null : $formValues.find('.setDonorTotal').val();
	var addDonorTotal = $formValues.find('.addDonorTotal').val();
	if(removeDonorTotal || setDonorTotal != null && setDonorTotal !== '')
		vals['setDonorTotal'] = setDonorTotal;
	if(addDonorTotal != null && addDonorTotal !== '')
		vals['addDonorTotal'] = addDonorTotal;
	var removeDonorTotal = $formValues.find('.removeDonorTotal').val();
	if(removeDonorTotal != null && removeDonorTotal !== '')
		vals['removeDonorTotal'] = removeDonorTotal;

	var valueDonorYtd = $formValues.find('.valueDonorYtd').val();
	var removeDonorYtd = $formValues.find('.removeDonorYtd').val() === 'true';
	var setDonorYtd = removeDonorYtd ? null : $formValues.find('.setDonorYtd').val();
	var addDonorYtd = $formValues.find('.addDonorYtd').val();
	if(removeDonorYtd || setDonorYtd != null && setDonorYtd !== '')
		vals['setDonorYtd'] = setDonorYtd;
	if(addDonorYtd != null && addDonorYtd !== '')
		vals['addDonorYtd'] = addDonorYtd;
	var removeDonorYtd = $formValues.find('.removeDonorYtd').val();
	if(removeDonorYtd != null && removeDonorYtd !== '')
		vals['removeDonorYtd'] = removeDonorYtd;

	var valueDonorQ1 = $formValues.find('.valueDonorQ1').val();
	var removeDonorQ1 = $formValues.find('.removeDonorQ1').val() === 'true';
	var setDonorQ1 = removeDonorQ1 ? null : $formValues.find('.setDonorQ1').val();
	var addDonorQ1 = $formValues.find('.addDonorQ1').val();
	if(removeDonorQ1 || setDonorQ1 != null && setDonorQ1 !== '')
		vals['setDonorQ1'] = setDonorQ1;
	if(addDonorQ1 != null && addDonorQ1 !== '')
		vals['addDonorQ1'] = addDonorQ1;
	var removeDonorQ1 = $formValues.find('.removeDonorQ1').val();
	if(removeDonorQ1 != null && removeDonorQ1 !== '')
		vals['removeDonorQ1'] = removeDonorQ1;

	var valueDonorQ2 = $formValues.find('.valueDonorQ2').val();
	var removeDonorQ2 = $formValues.find('.removeDonorQ2').val() === 'true';
	var setDonorQ2 = removeDonorQ2 ? null : $formValues.find('.setDonorQ2').val();
	var addDonorQ2 = $formValues.find('.addDonorQ2').val();
	if(removeDonorQ2 || setDonorQ2 != null && setDonorQ2 !== '')
		vals['setDonorQ2'] = setDonorQ2;
	if(addDonorQ2 != null && addDonorQ2 !== '')
		vals['addDonorQ2'] = addDonorQ2;
	var removeDonorQ2 = $formValues.find('.removeDonorQ2').val();
	if(removeDonorQ2 != null && removeDonorQ2 !== '')
		vals['removeDonorQ2'] = removeDonorQ2;

	var valueDonorQ3 = $formValues.find('.valueDonorQ3').val();
	var removeDonorQ3 = $formValues.find('.removeDonorQ3').val() === 'true';
	var setDonorQ3 = removeDonorQ3 ? null : $formValues.find('.setDonorQ3').val();
	var addDonorQ3 = $formValues.find('.addDonorQ3').val();
	if(removeDonorQ3 || setDonorQ3 != null && setDonorQ3 !== '')
		vals['setDonorQ3'] = setDonorQ3;
	if(addDonorQ3 != null && addDonorQ3 !== '')
		vals['addDonorQ3'] = addDonorQ3;
	var removeDonorQ3 = $formValues.find('.removeDonorQ3').val();
	if(removeDonorQ3 != null && removeDonorQ3 !== '')
		vals['removeDonorQ3'] = removeDonorQ3;

	var valueDonorQ4 = $formValues.find('.valueDonorQ4').val();
	var removeDonorQ4 = $formValues.find('.removeDonorQ4').val() === 'true';
	var setDonorQ4 = removeDonorQ4 ? null : $formValues.find('.setDonorQ4').val();
	var addDonorQ4 = $formValues.find('.addDonorQ4').val();
	if(removeDonorQ4 || setDonorQ4 != null && setDonorQ4 !== '')
		vals['setDonorQ4'] = setDonorQ4;
	if(addDonorQ4 != null && addDonorQ4 !== '')
		vals['addDonorQ4'] = addDonorQ4;
	var removeDonorQ4 = $formValues.find('.removeDonorQ4').val();
	if(removeDonorQ4 != null && removeDonorQ4 !== '')
		vals['removeDonorQ4'] = removeDonorQ4;

	var valueDonorLogoFilename = $formValues.find('.valueDonorLogoFilename').val();
	var removeDonorLogoFilename = $formValues.find('.removeDonorLogoFilename').val() === 'true';
	var setDonorLogoFilename = removeDonorLogoFilename ? null : $formValues.find('.setDonorLogoFilename').val();
	var addDonorLogoFilename = $formValues.find('.addDonorLogoFilename').val();
	if(removeDonorLogoFilename || setDonorLogoFilename != null && setDonorLogoFilename !== '')
		vals['setDonorLogoFilename'] = setDonorLogoFilename;
	if(addDonorLogoFilename != null && addDonorLogoFilename !== '')
		vals['addDonorLogoFilename'] = addDonorLogoFilename;
	var removeDonorLogoFilename = $formValues.find('.removeDonorLogoFilename').val();
	if(removeDonorLogoFilename != null && removeDonorLogoFilename !== '')
		vals['removeDonorLogoFilename'] = removeDonorLogoFilename;

	var valueReportKeys = $formValues.find('input.valueReportKeys:checked').val();
	if(valueReportKeys != null && valueReportKeys !== '')
		vals['addReportKeys'] = valueReportKeys;

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

	patchChoiceDonorVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchChoiceDonorFilters($formFilters) {
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

		var filterDonorFullName = $formFilters.find('.valueDonorFullName').val();
		if(filterDonorFullName != null && filterDonorFullName !== '')
			filters.push({ name: 'fq', value: 'donorFullName:' + filterDonorFullName });

		var filterDonorParentName = $formFilters.find('.valueDonorParentName').val();
		if(filterDonorParentName != null && filterDonorParentName !== '')
			filters.push({ name: 'fq', value: 'donorParentName:' + filterDonorParentName });

		var filterDonorId = $formFilters.find('.valueDonorId').val();
		if(filterDonorId != null && filterDonorId !== '')
			filters.push({ name: 'fq', value: 'donorId:' + filterDonorId });

		var filterDonorAttributeId = $formFilters.find('.valueDonorAttributeId').val();
		if(filterDonorAttributeId != null && filterDonorAttributeId !== '')
			filters.push({ name: 'fq', value: 'donorAttributeId:' + filterDonorAttributeId });

		var filterDonorInKind = $formFilters.find('.valueDonorInKind').val();
		if(filterDonorInKind != null && filterDonorInKind !== '')
			filters.push({ name: 'fq', value: 'donorInKind:' + filterDonorInKind });

		var filterDonorTotal = $formFilters.find('.valueDonorTotal').val();
		if(filterDonorTotal != null && filterDonorTotal !== '')
			filters.push({ name: 'fq', value: 'donorTotal:' + filterDonorTotal });

		var filterDonorYtd = $formFilters.find('.valueDonorYtd').val();
		if(filterDonorYtd != null && filterDonorYtd !== '')
			filters.push({ name: 'fq', value: 'donorYtd:' + filterDonorYtd });

		var filterDonorQ1 = $formFilters.find('.valueDonorQ1').val();
		if(filterDonorQ1 != null && filterDonorQ1 !== '')
			filters.push({ name: 'fq', value: 'donorQ1:' + filterDonorQ1 });

		var filterDonorQ2 = $formFilters.find('.valueDonorQ2').val();
		if(filterDonorQ2 != null && filterDonorQ2 !== '')
			filters.push({ name: 'fq', value: 'donorQ2:' + filterDonorQ2 });

		var filterDonorQ3 = $formFilters.find('.valueDonorQ3').val();
		if(filterDonorQ3 != null && filterDonorQ3 !== '')
			filters.push({ name: 'fq', value: 'donorQ3:' + filterDonorQ3 });

		var filterDonorQ4 = $formFilters.find('.valueDonorQ4').val();
		if(filterDonorQ4 != null && filterDonorQ4 !== '')
			filters.push({ name: 'fq', value: 'donorQ4:' + filterDonorQ4 });

		var filterDonorLogoFilename = $formFilters.find('.valueDonorLogoFilename').val();
		if(filterDonorLogoFilename != null && filterDonorLogoFilename !== '')
			filters.push({ name: 'fq', value: 'donorLogoFilename:' + filterDonorLogoFilename });

		var filterReportKeys = $formFilters.find('.valueReportKeys').val();
		if(filterReportKeys != null && filterReportKeys !== '')
			filters.push({ name: 'fq', value: 'reportKeys:' + filterReportKeys });

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
	}
	return filters;
}

function patchChoiceDonorVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchChoiceDonorVals(filters, vals, success, error);
}

function patchChoiceDonorVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/donor?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getChoiceDonor(pk) {
	$.ajax({
		url: '/api/donor/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchChoiceDonor($formFilters, success, error) {
	var filters = searchChoiceDonorFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchChoiceDonorVals(filters, success, error);
}

function searchChoiceDonorFilters($formFilters) {
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

		var filterDonorFullName = $formFilters.find('.valueDonorFullName').val();
		if(filterDonorFullName != null && filterDonorFullName !== '')
			filters.push({ name: 'fq', value: 'donorFullName:' + filterDonorFullName });

		var filterDonorParentName = $formFilters.find('.valueDonorParentName').val();
		if(filterDonorParentName != null && filterDonorParentName !== '')
			filters.push({ name: 'fq', value: 'donorParentName:' + filterDonorParentName });

		var filterDonorId = $formFilters.find('.valueDonorId').val();
		if(filterDonorId != null && filterDonorId !== '')
			filters.push({ name: 'fq', value: 'donorId:' + filterDonorId });

		var filterDonorAttributeId = $formFilters.find('.valueDonorAttributeId').val();
		if(filterDonorAttributeId != null && filterDonorAttributeId !== '')
			filters.push({ name: 'fq', value: 'donorAttributeId:' + filterDonorAttributeId });

		var filterDonorInKind = $formFilters.find('.valueDonorInKind').val();
		if(filterDonorInKind != null && filterDonorInKind !== '')
			filters.push({ name: 'fq', value: 'donorInKind:' + filterDonorInKind });

		var filterDonorTotal = $formFilters.find('.valueDonorTotal').val();
		if(filterDonorTotal != null && filterDonorTotal !== '')
			filters.push({ name: 'fq', value: 'donorTotal:' + filterDonorTotal });

		var filterDonorYtd = $formFilters.find('.valueDonorYtd').val();
		if(filterDonorYtd != null && filterDonorYtd !== '')
			filters.push({ name: 'fq', value: 'donorYtd:' + filterDonorYtd });

		var filterDonorQ1 = $formFilters.find('.valueDonorQ1').val();
		if(filterDonorQ1 != null && filterDonorQ1 !== '')
			filters.push({ name: 'fq', value: 'donorQ1:' + filterDonorQ1 });

		var filterDonorQ2 = $formFilters.find('.valueDonorQ2').val();
		if(filterDonorQ2 != null && filterDonorQ2 !== '')
			filters.push({ name: 'fq', value: 'donorQ2:' + filterDonorQ2 });

		var filterDonorQ3 = $formFilters.find('.valueDonorQ3').val();
		if(filterDonorQ3 != null && filterDonorQ3 !== '')
			filters.push({ name: 'fq', value: 'donorQ3:' + filterDonorQ3 });

		var filterDonorQ4 = $formFilters.find('.valueDonorQ4').val();
		if(filterDonorQ4 != null && filterDonorQ4 !== '')
			filters.push({ name: 'fq', value: 'donorQ4:' + filterDonorQ4 });

		var filterDonorLogoFilename = $formFilters.find('.valueDonorLogoFilename').val();
		if(filterDonorLogoFilename != null && filterDonorLogoFilename !== '')
			filters.push({ name: 'fq', value: 'donorLogoFilename:' + filterDonorLogoFilename });

		var filterReportKeys = $formFilters.find('.valueReportKeys').val();
		if(filterReportKeys != null && filterReportKeys !== '')
			filters.push({ name: 'fq', value: 'reportKeys:' + filterReportKeys });

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
	}
	return filters;
}

function searchChoiceDonorVals(filters, success, error) {


	filters.push({ name: 'sort', value: 'objectId asc' });
	$.ajax({
		url: '/api/donor?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestChoiceDonorObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-hands-heart ');
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
	searchChoiceDonorVals($formFilters, success, error);
}

function suggestChoiceDonorReportKeys(filters, $list, pk = null, relate=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-file-chart-line ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['donorKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_reportKeys_' + pk + '_donorKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueReportKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_reportKeys_" + pk + "_donorKey_" + o['pk'] + "'); patchChoiceDonorVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'ReportKeys']: \"" + o['pk'] + "\" } ); ");
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
		var focusId = $('#ChoiceDonorForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchChoiceReportVals(filters, success, error);
}

async function websocketChoiceDonor(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketChoiceDonor', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#ChoiceDonorForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-light-green ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-hands-heart w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify donors in ' + json.timeRemaining);
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

		window.eventBus.registerHandler('websocketChoiceReport', function (error, message) {
			$('#Page_reportKeys').trigger('oninput');
			$('#Page_reportKeys_add').text('add a report');
			$('#Page_reportKeys_add').removeClass('w3-disabled');
			$('#Page_reportKeys_add').attr('disabled', false);
		});
	}
}
async function websocketChoiceDonorInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchChoiceDonorVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputChoiceDonor' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputChoiceDonor' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputChoiceDonor' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputChoiceDonor' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputChoiceDonor' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputChoiceDonor' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'Deleted'));
			}
			var val = o['donorFullName'];
			if(vars.includes('donorFullName')) {
				$('.inputChoiceDonor' + pk + 'DonorFullName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'DonorFullName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'DonorFullName'));
			}
			var val = o['donorParentName'];
			if(vars.includes('donorParentName')) {
				$('.inputChoiceDonor' + pk + 'DonorParentName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'DonorParentName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'DonorParentName'));
			}
			var val = o['donorId'];
			if(vars.includes('donorId')) {
				$('.inputChoiceDonor' + pk + 'DonorId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'DonorId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'DonorId'));
			}
			var val = o['donorAttributeId'];
			if(vars.includes('donorAttributeId')) {
				$('.inputChoiceDonor' + pk + 'DonorAttributeId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'DonorAttributeId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'DonorAttributeId'));
			}
			var val = o['donorInKind'];
			if(vars.includes('donorInKind')) {
				$('.inputChoiceDonor' + pk + 'DonorInKind').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'DonorInKind').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'DonorInKind'));
			}
			var val = o['donorTotal'];
			if(vars.includes('donorTotal')) {
				$('.inputChoiceDonor' + pk + 'DonorTotal').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'DonorTotal').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'DonorTotal'));
			}
			var val = o['donorYtd'];
			if(vars.includes('donorYtd')) {
				$('.inputChoiceDonor' + pk + 'DonorYtd').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'DonorYtd').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'DonorYtd'));
			}
			var val = o['donorQ1'];
			if(vars.includes('donorQ1')) {
				$('.inputChoiceDonor' + pk + 'DonorQ1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'DonorQ1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'DonorQ1'));
			}
			var val = o['donorQ2'];
			if(vars.includes('donorQ2')) {
				$('.inputChoiceDonor' + pk + 'DonorQ2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'DonorQ2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'DonorQ2'));
			}
			var val = o['donorQ3'];
			if(vars.includes('donorQ3')) {
				$('.inputChoiceDonor' + pk + 'DonorQ3').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'DonorQ3').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'DonorQ3'));
			}
			var val = o['donorQ4'];
			if(vars.includes('donorQ4')) {
				$('.inputChoiceDonor' + pk + 'DonorQ4').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'DonorQ4').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'DonorQ4'));
			}
			var val = o['donorLogoFilename'];
			if(vars.includes('donorLogoFilename')) {
				$('.inputChoiceDonor' + pk + 'DonorLogoFilename').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'DonorLogoFilename').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'DonorLogoFilename'));
			}
			var val = o['reportKeys'];
			if(vars.includes('reportKeys')) {
				$('.inputChoiceDonor' + pk + 'ReportKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'ReportKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'ReportKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputChoiceDonor' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'InheritPk'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputChoiceDonor' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputChoiceDonor' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputChoiceDonor' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputChoiceDonor' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'SessionId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputChoiceDonor' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputChoiceDonor' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputChoiceDonor' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputChoiceDonor' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputChoiceDonor' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputChoiceDonor' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputChoiceDonor' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputChoiceDonor' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'PageUrlApi'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputChoiceDonor' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varChoiceDonor' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputChoiceDonor' + pk + 'Id'));
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
				layout['title'] = 'ChoiceDonor';
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
