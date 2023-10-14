SHELL := /bin/bash

define BASH_FUNC_increment-version%%
() {
	# Retrieve current version
	local version=`grep -oP '(?<="version": ")[^"]*' package.json 2>/dev/null`

	# Increment the version
	local delimiter=.
	local array=($$(echo $${version} | tr $$delimiter '\n'))
	array[$$1]=$$((array[$$1]+1))
	if [ $$1 -lt 2 ]; then array[2]=0; fi
	if [ $$1 -lt 1 ]; then array[1]=0; fi
	new_version=$$(local IFS=$$delimiter ; echo "$${array[*]}")

	# Update package.json with the new version
	sed -i "s/\"version\": \"$$version\"/\"version\": \"$$new_version\"/" package.json
}
endef
export BASH_FUNC_increment-version%%

_assert-git-status:
	

release-patch:
	@increment-version 2

release-minor:
	@increment-version 1

release-major:
	@increment-version 0
