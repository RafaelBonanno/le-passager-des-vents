require "test_helper"

class InstrumentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get instruments_index_url
    assert_response :success
  end

  test "should get vents" do
    get instruments_vents_url
    assert_response :success
  end

  test "should get cuivres" do
    get instruments_cuivres_url
    assert_response :success
  end
end
