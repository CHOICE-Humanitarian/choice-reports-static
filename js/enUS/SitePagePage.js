
// Search //

async function searchSitePage($formFilters, success, error) {
	var filters = searchSitePageFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSitePageVals(filters, success, error);
}

function searchSitePageFilters($formFilters) {
	var filters = [];
	if($formFilters) {

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

		var filterPageId = $formFilters.find('.valuePageId').val();
		if(filterPageId != null && filterPageId !== '')
			filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

		var filterUri = $formFilters.find('.valueUri').val();
		if(filterUri != null && filterUri !== '')
			filters.push({ name: 'fq', value: 'uri:' + filterUri });

		var filterAuthor = $formFilters.find('.valueAuthor').val();
		if(filterAuthor != null && filterAuthor !== '')
			filters.push({ name: 'fq', value: 'author:' + filterAuthor });

		var filterPageImageUri = $formFilters.find('.valuePageImageUri').val();
		if(filterPageImageUri != null && filterPageImageUri !== '')
			filters.push({ name: 'fq', value: 'pageImageUri:' + filterPageImageUri });

		var filterCourseNum = $formFilters.find('.valueCourseNum').val();
		if(filterCourseNum != null && filterCourseNum !== '')
			filters.push({ name: 'fq', value: 'courseNum:' + filterCourseNum });

		var filterLessonNum = $formFilters.find('.valueLessonNum').val();
		if(filterLessonNum != null && filterLessonNum !== '')
			filters.push({ name: 'fq', value: 'lessonNum:' + filterLessonNum });

		var filterH1 = $formFilters.find('.valueH1').val();
		if(filterH1 != null && filterH1 !== '')
			filters.push({ name: 'fq', value: 'h1:' + filterH1 });

		var filterH2 = $formFilters.find('.valueH2').val();
		if(filterH2 != null && filterH2 !== '')
			filters.push({ name: 'fq', value: 'h2:' + filterH2 });

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

function searchSitePageVals(filters, success, error) {

	filters.push({ name: 'sort', value: 'courseNum asc' });
	filters.push({ name: 'sort', value: 'lessonNum asc' });
	$.ajax({
		url: '/api/page?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSitePageObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-newspaper ');
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
	searchSitePageVals($formFilters, success, error);
}

// GET //

async function getSitePage() {
	$.ajax({
		url: '/api/page/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// POST //

async function postSitePage($formValues, success, error) {
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

	var valuePageId = $formValues.find('.valuePageId').val();
	if(valuePageId != null && valuePageId !== '')
		vals['pageId'] = valuePageId;

	var valueUri = $formValues.find('.valueUri').val();
	if(valueUri != null && valueUri !== '')
		vals['uri'] = valueUri;

	var valueAuthor = $formValues.find('.valueAuthor').val();
	if(valueAuthor != null && valueAuthor !== '')
		vals['author'] = valueAuthor;

	var valuePageImageUri = $formValues.find('.valuePageImageUri').val();
	if(valuePageImageUri != null && valuePageImageUri !== '')
		vals['pageImageUri'] = valuePageImageUri;

	var valueCourseNum = $formValues.find('.valueCourseNum').val();
	if(valueCourseNum != null && valueCourseNum !== '')
		vals['courseNum'] = valueCourseNum;

	var valueLessonNum = $formValues.find('.valueLessonNum').val();
	if(valueLessonNum != null && valueLessonNum !== '')
		vals['lessonNum'] = valueLessonNum;

	var valueH1 = $formValues.find('.valueH1').val();
	if(valueH1 != null && valueH1 !== '')
		vals['h1'] = valueH1;

	var valueH2 = $formValues.find('.valueH2').val();
	if(valueH2 != null && valueH2 !== '')
		vals['h2'] = valueH2;

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

	var valueObjectText = $formValues.find('.valueObjectText').val();
	if(valueObjectText != null && valueObjectText !== '')
		vals['objectText'] = valueObjectText;

	$.ajax({
		url: '/api/page'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSitePageVals(vals, success, error) {
	$.ajax({
		url: '/api/page'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSitePage($formFilters, $formValues, id, success, error) {
	var filters = patchSitePageFilters($formFilters);

	var vals = {};

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

	var valuePageId = $formValues.find('.valuePageId').val();
	var removePageId = $formValues.find('.removePageId').val() === 'true';
	var setPageId = removePageId ? null : $formValues.find('.setPageId').val();
	var addPageId = $formValues.find('.addPageId').val();
	if(removePageId || setPageId != null && setPageId !== '')
		vals['setPageId'] = setPageId;
	if(addPageId != null && addPageId !== '')
		vals['addPageId'] = addPageId;
	var removePageId = $formValues.find('.removePageId').val();
	if(removePageId != null && removePageId !== '')
		vals['removePageId'] = removePageId;

	var valueUri = $formValues.find('.valueUri').val();
	var removeUri = $formValues.find('.removeUri').val() === 'true';
	var setUri = removeUri ? null : $formValues.find('.setUri').val();
	var addUri = $formValues.find('.addUri').val();
	if(removeUri || setUri != null && setUri !== '')
		vals['setUri'] = setUri;
	if(addUri != null && addUri !== '')
		vals['addUri'] = addUri;
	var removeUri = $formValues.find('.removeUri').val();
	if(removeUri != null && removeUri !== '')
		vals['removeUri'] = removeUri;

	var valueAuthor = $formValues.find('.valueAuthor').val();
	var removeAuthor = $formValues.find('.removeAuthor').val() === 'true';
	var setAuthor = removeAuthor ? null : $formValues.find('.setAuthor').val();
	var addAuthor = $formValues.find('.addAuthor').val();
	if(removeAuthor || setAuthor != null && setAuthor !== '')
		vals['setAuthor'] = setAuthor;
	if(addAuthor != null && addAuthor !== '')
		vals['addAuthor'] = addAuthor;
	var removeAuthor = $formValues.find('.removeAuthor').val();
	if(removeAuthor != null && removeAuthor !== '')
		vals['removeAuthor'] = removeAuthor;

	var valuePageImageUri = $formValues.find('.valuePageImageUri').val();
	var removePageImageUri = $formValues.find('.removePageImageUri').val() === 'true';
	var setPageImageUri = removePageImageUri ? null : $formValues.find('.setPageImageUri').val();
	var addPageImageUri = $formValues.find('.addPageImageUri').val();
	if(removePageImageUri || setPageImageUri != null && setPageImageUri !== '')
		vals['setPageImageUri'] = setPageImageUri;
	if(addPageImageUri != null && addPageImageUri !== '')
		vals['addPageImageUri'] = addPageImageUri;
	var removePageImageUri = $formValues.find('.removePageImageUri').val();
	if(removePageImageUri != null && removePageImageUri !== '')
		vals['removePageImageUri'] = removePageImageUri;

	var valueCourseNum = $formValues.find('.valueCourseNum').val();
	var removeCourseNum = $formValues.find('.removeCourseNum').val() === 'true';
	var setCourseNum = removeCourseNum ? null : $formValues.find('.setCourseNum').val();
	var addCourseNum = $formValues.find('.addCourseNum').val();
	if(removeCourseNum || setCourseNum != null && setCourseNum !== '')
		vals['setCourseNum'] = setCourseNum;
	if(addCourseNum != null && addCourseNum !== '')
		vals['addCourseNum'] = addCourseNum;
	var removeCourseNum = $formValues.find('.removeCourseNum').val();
	if(removeCourseNum != null && removeCourseNum !== '')
		vals['removeCourseNum'] = removeCourseNum;

	var valueLessonNum = $formValues.find('.valueLessonNum').val();
	var removeLessonNum = $formValues.find('.removeLessonNum').val() === 'true';
	var setLessonNum = removeLessonNum ? null : $formValues.find('.setLessonNum').val();
	var addLessonNum = $formValues.find('.addLessonNum').val();
	if(removeLessonNum || setLessonNum != null && setLessonNum !== '')
		vals['setLessonNum'] = setLessonNum;
	if(addLessonNum != null && addLessonNum !== '')
		vals['addLessonNum'] = addLessonNum;
	var removeLessonNum = $formValues.find('.removeLessonNum').val();
	if(removeLessonNum != null && removeLessonNum !== '')
		vals['removeLessonNum'] = removeLessonNum;

	var valueH1 = $formValues.find('.valueH1').val();
	var removeH1 = $formValues.find('.removeH1').val() === 'true';
	var setH1 = removeH1 ? null : $formValues.find('.setH1').val();
	var addH1 = $formValues.find('.addH1').val();
	if(removeH1 || setH1 != null && setH1 !== '')
		vals['setH1'] = setH1;
	if(addH1 != null && addH1 !== '')
		vals['addH1'] = addH1;
	var removeH1 = $formValues.find('.removeH1').val();
	if(removeH1 != null && removeH1 !== '')
		vals['removeH1'] = removeH1;

	var valueH2 = $formValues.find('.valueH2').val();
	var removeH2 = $formValues.find('.removeH2').val() === 'true';
	var setH2 = removeH2 ? null : $formValues.find('.setH2').val();
	var addH2 = $formValues.find('.addH2').val();
	if(removeH2 || setH2 != null && setH2 !== '')
		vals['setH2'] = setH2;
	if(addH2 != null && addH2 !== '')
		vals['addH2'] = addH2;
	var removeH2 = $formValues.find('.removeH2').val();
	if(removeH2 != null && removeH2 !== '')
		vals['removeH2'] = removeH2;

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

	var valueObjectText = $formValues.find('.valueObjectText').val();
	var removeObjectText = $formValues.find('.removeObjectText').val() === 'true';
	var setObjectText = removeObjectText ? null : $formValues.find('.setObjectText').val();
	var addObjectText = $formValues.find('.addObjectText').val();
	if(removeObjectText || setObjectText != null && setObjectText !== '')
		vals['setObjectText'] = setObjectText;
	if(addObjectText != null && addObjectText !== '')
		vals['addObjectText'] = addObjectText;
	var removeObjectText = $formValues.find('.removeObjectText').val();
	if(removeObjectText != null && removeObjectText !== '')
		vals['removeObjectText'] = removeObjectText;

	patchSitePageVals(id == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'id:' + id}], vals, success, error);
}

function patchSitePageFilters($formFilters) {
	var filters = [];
	if($formFilters) {
		filters.push({ name: 'softCommit', value: 'true' });

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

		var filterPageId = $formFilters.find('.valuePageId').val();
		if(filterPageId != null && filterPageId !== '')
			filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

		var filterUri = $formFilters.find('.valueUri').val();
		if(filterUri != null && filterUri !== '')
			filters.push({ name: 'fq', value: 'uri:' + filterUri });

		var filterAuthor = $formFilters.find('.valueAuthor').val();
		if(filterAuthor != null && filterAuthor !== '')
			filters.push({ name: 'fq', value: 'author:' + filterAuthor });

		var filterPageImageUri = $formFilters.find('.valuePageImageUri').val();
		if(filterPageImageUri != null && filterPageImageUri !== '')
			filters.push({ name: 'fq', value: 'pageImageUri:' + filterPageImageUri });

		var filterCourseNum = $formFilters.find('.valueCourseNum').val();
		if(filterCourseNum != null && filterCourseNum !== '')
			filters.push({ name: 'fq', value: 'courseNum:' + filterCourseNum });

		var filterLessonNum = $formFilters.find('.valueLessonNum').val();
		if(filterLessonNum != null && filterLessonNum !== '')
			filters.push({ name: 'fq', value: 'lessonNum:' + filterLessonNum });

		var filterH1 = $formFilters.find('.valueH1').val();
		if(filterH1 != null && filterH1 !== '')
			filters.push({ name: 'fq', value: 'h1:' + filterH1 });

		var filterH2 = $formFilters.find('.valueH2').val();
		if(filterH2 != null && filterH2 !== '')
			filters.push({ name: 'fq', value: 'h2:' + filterH2 });

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

function patchSitePageVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSitePageVals(filters, vals, success, error);
}

function patchSitePageVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/page?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSitePage($formValues, id, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportSitePageVals(JSON.parse(json), success, error);
}

function putimportSitePageVals(json, success, error) {
	$.ajax({
		url: '/api/page-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

async function websocketSitePage(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSitePage', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SitePageForm :input[name=id]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-2017-navy-peony ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-newspaper w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify articles in ' + json.timeRemaining);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-2017-navy-peony ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
	}
}
async function websocketSitePageInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSitePageVals([ {name: 'fq', value: 'id:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSitePage' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSitePage' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSitePage' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSitePage' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSitePage' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'Deleted'));
			}
			var val = o['pageId'];
			if(vars.includes('pageId')) {
				$('.inputSitePage' + pk + 'PageId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'PageId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'PageId'));
			}
			var val = o['uri'];
			if(vars.includes('uri')) {
				$('.inputSitePage' + pk + 'Uri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'Uri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'Uri'));
			}
			var val = o['author'];
			if(vars.includes('author')) {
				$('.inputSitePage' + pk + 'Author').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'Author').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'Author'));
			}
			var val = o['pageImageUri'];
			if(vars.includes('pageImageUri')) {
				$('.inputSitePage' + pk + 'PageImageUri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'PageImageUri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'PageImageUri'));
			}
			var val = o['courseNum'];
			if(vars.includes('courseNum')) {
				$('.inputSitePage' + pk + 'CourseNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'CourseNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'CourseNum'));
			}
			var val = o['lessonNum'];
			if(vars.includes('lessonNum')) {
				$('.inputSitePage' + pk + 'LessonNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'LessonNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'LessonNum'));
			}
			var val = o['h1'];
			if(vars.includes('h1')) {
				$('.inputSitePage' + pk + 'H1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'H1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'H1'));
			}
			var val = o['h2'];
			if(vars.includes('h2')) {
				$('.inputSitePage' + pk + 'H2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'H2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'H2'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSitePage' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'InheritPk'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSitePage' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSitePage' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSitePage' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSitePage' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'SessionId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSitePage' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSitePage' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSitePage' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSitePage' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSitePage' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSitePage' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSitePage' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSitePage' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'PageUrlApi'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSitePage' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePage' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePage' + pk + 'Id'));
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
				layout['title'] = 'SitePage';
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
			Plotly.newPlot('htmBodyGraphPageLayout', data, layout);
		}
	}
}
